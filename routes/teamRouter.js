const router = require('express').Router();

const team = require('../controllers/teamController');

router.post('/create', team.createTeam);
router.get('/room', team.team);

module.exports = router;