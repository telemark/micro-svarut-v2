[![Build Status](https://travis-ci.org/telemark/micro-svarut.svg?branch=master)](https://travis-ci.org/telemark/micro-svarut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-svarut

microservice for svarut forsendelsesservice v5

## config now.json:env

```bash
NODE_ENV=production
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SVARUT_URL=https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV5
SVARUT_ACTION=http://www.ks.no/svarut/services/ForsendelsesServiceV5/sendForsendelse
PAPERTRAIL_HOSTNAME=micro-svarut
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## API

### POST ```/```

```json
{
  "title": "SvarUt testdokument",
  "documents": [
    {
      "data": "base64data",
      "fileName": "skoleskyss_avslag_vedtak.pdf",
      "mimeType": "application/pdf"
    }
  ],
  "shipment": {
    "emittingSystem": "node-svarut test",
    "postingCode": "1111",
    "level4login": false,
    "encrypted": false,
    "digitalDelivery": false
  },
  "recipients": [
    {
      "type": "privatPerson",
      // "type": "Organisasjon",
      "name": "Terje Tverrtryne",
      "address1": "Skogsveien 42",
      "address2": "",
      "address3": "",
      "postalCode": "3710",
      "postalCity": "Skien",
      "personalId": "01029400470"
      // organizationId: "940192226"
    }
  ],
  "printConfiguration": {
    "letterType": "BPOST",
    "colorPrint": true,
    "duplex": false
  }
}
```

## Development

Add a local `.env` file.

```bash
NODE_ENV=development
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SVARUT_URL=https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV5
SVARUT_ACTION=http://www.ks.no/svarut/services/ForsendelsesServiceV5/sendForsendelse
PAPERTRAIL_HOSTNAME=micro-svarut
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

Start the development server

```
$ now dev
```

## Deploy

- Make sure all secrets are available on the ZEIT organization
- Run the deploy script

```
$ npm run deploy
```

## License

[MIT](LICENSE)

