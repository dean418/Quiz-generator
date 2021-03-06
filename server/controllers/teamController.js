const TeamModel = require('../models/teamModel');
const RoomModel = require('../models/roomModel');

exports.createTeam = async (req, res) => {
    const {teamName, name} = req.body;
    const {roomKey} = req.session;

    if (!teamName || !name) {
        res.send({err: 'Missing required information!'});
        return;
    }

    if (await TeamModel.checkExists(teamName)) {
        await TeamModel.addMember(teamName, name);
        res.send({success: true, message: 'You have been added to a team'});
        return;
    }

    const team = new TeamModel({
        teamName,
        names: [name]
    });

    if (!await RoomModel.addTeam(roomKey, team._id)) {
        res.send({success: false, message: 'The room you have tried to join no longer exists'});
        return;
    }

    team.save();

    req.session.teamName = teamName;
    req.session.name = name;
    req.session.save();

    res.send({success: true, message: 'Your team has been created'});
}