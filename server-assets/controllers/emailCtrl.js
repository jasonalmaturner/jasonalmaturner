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
      const status = result[0].status;
      const reason = result[0].reject_reason;
      if (status === 'rejected' || status === 'invalid') {
        return res.status(500).json(result[0]);
      }

      return res.json(result[0]);
    }, err => res.status(500).json(err));
  },
};
