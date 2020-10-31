const router = require('express').Router();

const room = require('../controllers/roomController');

router.get('/create', room.createRoom);
router.post('/join', room.joinRoom);

module.exports = router;