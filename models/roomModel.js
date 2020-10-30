const {Schema, model, Types} = require('mongoose');

const Room = new Schema({
    roomKey: {type: String, required: true, unique: true},
    teams: {type: [Types.ObjectId]}
});

Room.statics.checkExists = async function (roomKey) {
    let exists = await this.exists({roomKey});

    return exists;
}

Room.statics.addTeam = async function (roomKey, teamID) {
    let updated = await this.findOneAndUpdate({roomKey}, {$push: {teams: teamID}});

    return updated;
}

module.exports = model('rooms', Room);