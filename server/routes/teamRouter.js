const router = require('express').Router();

const team = require('../controllers/teamController');

router.post('/create', team.createTeam);

module.exports = router;