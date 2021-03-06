'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const svarUt = require('svarut')
const config = require('./config')
const logger = require('./lib/logger')
const format = require('./lib/format')
const validateJwt = require('./lib/validate-jwt')

module.exports = async (req, response) => {
  const { query } = await parse(req.url, true)
  const data = ['POST', 'PUT'].includes(req.method) ? await json(req) : query

  if (['POST'].includes(req.method)) {
    const jwt = req.headers.authorization
    const decoded = await validateJwt({ jwt: jwt, tokenKey: config.JWT_SECRET })
    if (decoded) {
      logger('info', ['Validated jwt'])
      const formatedData = format(data)
      formatedData.config = {
        url: config.SVARUT_URL,
        action: config.SVARUT_ACTION
      }

      try {
        const id = await svarUt(formatedData)
        logger('info', ['ID from svarut', id])
        send(response, 200, id)
      } catch (err) {
        logger('error', err)
        send(response, 500, err)
      }
    }
  } else {
    response.status(405)
    response.send('Method not allowed')
  }
}
