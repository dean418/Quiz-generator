const router = require('express').Router();

const index = require('../controllers/indexController');

router.get('/', index.home);

module.exports = router;