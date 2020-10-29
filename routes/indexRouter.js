const router = require('express').Router();

const index = require('../controllers/indexController');

router.get('/', index.index);
router.get('/create-room', index.createRoom);

module.exports = router;