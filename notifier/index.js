const nodemailer = require('./nodemailer'),
      bitvavo = require('bitvavo')();

bitvavo.book('ARK-EUR', {}, (error, response) => {
  if (!error) {

    let found = response.asks.find(ask => parseFloat(ask) <= 0.19)

    if (found) {
      console.log('Found: ', found);
      nodemailer().catch(err => {
        console.log(err);
      });
    }
  }
})
