// The Javascript SDK works with callbacks and with promises. For info, check our GitHub.
const bitvavo = require('bitvavo')()
bitvavo.book('ARK-EUR', {}, (error, response) => {
  if (error === null) {
    for (let entry of response.bids) {
      // console.log(entry);
      if (parseFloat(entry) >= 0.25) {
        console.log('Bid: ', entry);
      }
    }
    for (let entry of response.asks) {
      // console.log('Asks: ', entry)
      if (parseFloat(entry) <= 0.19) {
        console.log('Asks: ', entry)
      }
    }
  } else {
    console.log(error)
  }
})
