import { Mandrill } from 'mandrill-api';
const mandrillClient = new Mandrill('iXlKVWwuRP54zNWD8ErILQ');

export default {
  sendEmail(req, res) {
    mandrillClient.messages.send({
      message: {
        text: req.body.message,
        subject: 'Someone loves you',
        from_email: req.body.fromEmail,
        from_name: req.body.fromName,
        to: [
          {
            email: 'jasonalmaturner@gmail.com',
            name: 'Jason Turner',
            type: 'to',
          },
        ],
      },
    }, result => {
      console.log(111111, result);
      return res.json(result);
    }, err => res.status(500).json(err));
  },
};
