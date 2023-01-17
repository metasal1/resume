import Twilio from 'twilio';

export default function sms(req, res) {

  const client = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

  if (req.method !== 'POST') {
    res.status(405).json({ result: "error", message: "Method not allowed" });
    return;
  }

  if (!req.body){
    res.status(400).json({ result: "error", message: "No body" });
    return; 
  }

  const body = JSON.parse(req.body);

    client.messages
      .create({
        body: `From: ${body.from}\nMessage:\n ${body.message}`,
        to: '+61401222228', // Text this number
        from: 'Salim', // From a valid Twilio number
      })
      .then((message) => {
        console.log(message.sid)
        res.status(200).json({ result: "success", message: message });
      }
      )
    }