const {Schema, model} = require('mongoose');

const team = new Schema({
    teamName: {type: String, required: true, unique: true},
    names: {type: [String], required: true, unique: false}
});

team.statics.checkExists = async function (teamName) {
    let exists = await this.exists({teamName});
    return exists;
}

module.exports = model('teams', team);