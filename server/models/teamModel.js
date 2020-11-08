const {Schema, model} = require('mongoose');

const Team = new Schema({
    teamName: {type: String, required: true, unique: true},
    names: {type: [String], required: true, unique: false}
});

Team.statics.checkExists = async function(teamName) {
    let exists = await this.exists({teamName});
    return exists;
}

Team.statics.addMember = async function(teamName, name) {
    await this.findOneAndUpdate({teamName}, {$push: {names: name}});
    return;
}

module.exports = model('teams', Team);