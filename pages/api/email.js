export default function handler(req, res) {
  
// const to = req.query.to;
// const subject = req.query.subject;
const message = req.query.message;
const from = req.query.from;


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'salim@outlook.com.au',
  from: 'imsjk8@gmail.com', // Use the email address or domain you verified above
  subject: 'Salims Resume App', // 'Sending with Twilio SendGrid is Fun',
  text: message, //'and easy to do anywhere, even with Node.js',
  html: message // '<strong>and easy to do anywhere, even with Node.js</strong>',
};
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

res.status(200).json({ to: from, message: message })
}
