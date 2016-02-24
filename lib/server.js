import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testCtrl from '../server-assets/controllers/testCtrl';
import gitCtrl from '../server-assets/controllers/gitCtrl';
import emailCtrl from '../server-assets/controllers/emailCtrl';

const app = express();
const port = process.env.EXPRESS_PORT || 9001;

app.use(bodyParser.json(), cors(), express.static(__dirname + '/../public'));

app.get('/api/test', testCtrl.firstGet);
app.get('/api/events', gitCtrl.getEvents);
app.post('/api/email', emailCtrl.sendEmail);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
