const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Shop home page');
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About Shop ');
});
// define the about route
router.get('/shopitems/:slug', (req, res) => {
  res.send(`Fetch the shop items for ${req.params.slug}`);
});

module.exports = router;