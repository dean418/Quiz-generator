const {v4: uuidv4} = require('uuid');

const RoomModel = require('../models/roomModel');

exports.index = (req, res) => {
    res.render('index');
}

exports.createRoom = (req, res) => {
    const roomKey = uuidv4();

    const room = new RoomModel({
        roomKey
    });

    room.save();

    res.redirect(`/team/room/${roomKey}`);
}