const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;