const TeamModel = require('../models/teamModel');
const RoomModel = require('../models/roomModel');

exports.team = (req, res) => {
    res.render('create-team', {key: req.params.roomKey});
}

exports.createTeam = async (req, res) => {
    const {teamName, name} = req.body;
    const {roomKey} = req.session;

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

    if (!await RoomModel.addTeam(roomKey, team._id)) {
        res.send('The room you have tried to join no longer exists');
        return;
    }

    team.save();

    req.session.teamName = teamName;
    req.session.name = name;
    req.session.save();

    res.send('Your team has been created');
}