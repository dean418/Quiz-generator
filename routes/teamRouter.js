const router = require('express').Router();

const index = require('../controllers/teamController');

router.get('/', index.team);
router.post('/create', index.createTeam);

module.exports = router;