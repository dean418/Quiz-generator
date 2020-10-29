const TeamModel = require('../models/teamModel');

exports.team = (req, res) => {
    res.render('create-team');
}

exports.createTeam = async (req, res) => {
    const {teamName, name} = req.body;

    if (!teamName || !name) {
        res.render('create-team', {err: 'Missing required information!'});
        return;
    }

    if (await TeamModel.checkExists(teamName)) {
        await TeamModel.findOneAndUpdate({teamName}, {$push: {names: name}});
        res.send('You have been added to a team');
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

    res.send('Your team has been created');
}