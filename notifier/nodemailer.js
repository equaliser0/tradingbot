const nodemailer = require('nodemailer');

module.exports = async function() {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
            host: '',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            },
            logger: true,
            debug: false // include SMTP traffic in the logs
        },
        {
            // default message fields

            // sender info
            from: 'TradingBot Notifier',
            headers: {
                'X-Laziness-level': 1000 // just an example header, no need to use this
            }
        });

    // Message object
    let message = {

        // Comma separated list of recipients
        to: '',

        // Subject of the message
        subject: 'EUR-ARK under 0.19 EUR',

        // plaintext body
        text: 'Ark costs less then 0.19 EUR',
    }

    let info = await transporter.sendMail(message);
    console.log('Message sent successfully as %s', info.messageId);
}
