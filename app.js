require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api')

const key    = process.env.key;
const secret = process.env.secret;

const alpaca = new Alpaca({
    keyId: key,
    secretKey: secret,
    paper: true,
  })

/* start and end date are YYYY-MM-DD formatted strings */
async function getBarsV2(ticker, start_date, end_date, ) {
    const bars = alpaca.getBarsV2(ticker, {
        start: start_date,
        end: end_date,
        timeframe: alpaca.newTimeframe(30, alpaca.timeframeUnit.MIN),
        limit: 1,
    });
    const got = [];
    for await (let b of bars) {
        got.push(b);
    }
    console.log(got);
}

getBarsV2("SPY","2022-04-01","2022-04-02")