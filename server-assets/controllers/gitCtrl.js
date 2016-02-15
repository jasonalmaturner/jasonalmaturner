import axios from 'axios';

export default {
  getEvents(req, res) {
    let user = req.query.user || 'jasonalmaturner';
    axios.get(`https://api.github.com/users/${user}/events`).then(events => res.json(events.data)).catch(err => res.status(500).json(err));
  },
};
