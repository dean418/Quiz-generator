const router = require('express').Router();

const room = require('../controllers/roomController');

router.get('/', room.index);
router.get('/create', room.createRoom);
router.post('/join/', room.joinRoom);

module.exports = router;