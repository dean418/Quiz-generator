const {v4: uuidv4} = require('uuid');

const RoomModel = require('../models/roomModel');

exports.createRoom = async (req, res) => {
    const roomKey = uuidv4();

    const room = new RoomModel({
        roomKey
    });

    room.save();

    req.session.roomKey = roomKey;
    req.session.save()
    res.send({key: roomKey});
}

exports.joinRoom = async(req, res) => {
    let {roomKey} = req.body;

    if(await RoomModel.checkExists(roomKey)) {
        req.session.roomKey = roomKey;
        req.session.save();
        res.send({success: true, key: roomKey});
        return;
    }

    res.send({err: 'Invalid room key'});
}