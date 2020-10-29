const router = require('express').Router();

const team = require('../controllers/teamController');

router.post('/create/:roomKey', team.createTeam);
router.get('/room/:roomKey', team.team);

module.exports = router;