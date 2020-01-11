'use strict'
const formatDocument = require('./formatDocument')
const formatRecipient = require('./formatRecipient')
module.exports = data => {
  return {
    tittel: data.title || 'test dokument',
    dokumenter: data.documents.map(formatDocument),
    forsendelse: {
      avgivendeSystem: data.shipment.emittingSystem || undefined,
      konteringskode: data.shipment.postingCode || undefined,
      krevNiva4Innlogging: data.shipment.level4login || false,
      kryptert: data.shipment.encrypted || false,
      kunDigitalLevering: data.shipment.digitalDelivery || false
    },
    mottaker: data.recipients.map(formatRecipient),
    printkonfigurasjon: {
      brevtype: data.printConfiguration.letterType || false,
      fargePrint: data.printConfiguration.colorPrint || false,
      tosidig: data.printConfiguration.duplex || true
    }
  }
}
