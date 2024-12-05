require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api')

const key    = process.env.key;
const secret = process.env.secret;

const alpaca = new Alpaca({
    keyId: key,
    secretKey: secret,
    paper: true,
  })

alpaca.getAccount().then((account) => {
    console.log('Current Account:', account)
})