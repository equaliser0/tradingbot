// The Javascript SDK works with callbacks and with promises. For info, check our GitHub.
const bitvavo = require('bitvavo')()
bitvavo.book('ARK-EUR', {}, (error, response) => {
  if (error === null) {
    for (let entry of response.bids) {
      console.log('Bids: ', entry)
    }
    for (let entry of response.asks) {
      console.log('Asks: ', entry)
    }
  } else {
    console.log(error)
  }
})
