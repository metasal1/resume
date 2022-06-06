export default function handler(req, res) {
  if (req.query.message) {
    const message = req.query.message;
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.OUTLOOK,
      from: process.env.GMAIL, // Use the email address or domain you verified above
      subject: "Salims Resume App", // 'Sending with Twilio SendGrid is Fun',
      text: message, //'and easy to do anywhere, even with Node.js',
      html: message, // '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    (async () => {
      try {
        await sgMail.send(msg);
        res.status(200).json({ result: "success", message: message });
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();

  } else {
    res.status(404).json({ result: "you fucked up" });
  }
}
