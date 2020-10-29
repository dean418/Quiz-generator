const TeamModel = require('../models/teamModel');

exports.team = (req, res) => {
    res.render('create-team');
}

exports.createTeam = (req, res) => {
    const {teamName, name} = req.body;

    if (!teamName || !name) {
        res.render('index', {err: 'Missing required information!'});
        return;
    }

    if (TeamModel.checkExists(teamName)) {
        TeamModel.update({teamName}, {$push: {names: name}});
        res.redirect('/#');
        return;
    }

    const team = new TeamModel({
        teamName,
        names: [name]
    });

    team.save();

    req.session.teamName = teamName;
    req.session.name = name;
    req.session.save();

    res.redirect('/#');
}