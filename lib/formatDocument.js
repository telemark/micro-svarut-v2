'use strict'
module.exports = document => {
  return {
    data: document.data,
    filnavn: document.fileName,
    mimetype: document.mimetype || 'application/pdf'
  }
}
