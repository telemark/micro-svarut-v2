'use strict'
module.exports = recipient => {
  const reformat = {
    type: recipient.type || 'privatPerson',
    navn: recipient.name || undefined,
    adresse1: recipient.address1 || undefined,
    adresse2: recipient.address2 || undefined,
    adresse3: recipient.address3 || undefined,
    postnr: recipient.postalCode || undefined,
    poststed: recipient.postalCity || undefined
  }
  if (reformat.type === 'privatPerson') {
    reformat.fodselsnr = recipient.personalId || undefined
  } else {
    reformat.orgnr = recipient.organizationId || undefined
  }
  return reformat
}
