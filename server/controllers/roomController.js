const {v4: uuidv4} = require('uuid');

const RoomModel = require('../models/roomModel');

exports.index = (req, res) => {
    res.render('index');
}

exports.createRoom = async (req, res) => {
    const roomKey = uuidv4();

    const room = new RoomModel({
        roomKey
    });

    room.save();

    req.session.roomKey = roomKey;
    req.session.save()
    res.redirect('/team/room');

}

exports.joinRoom = async(req, res) => {
    let {roomKey} = req.body;

    if(await RoomModel.checkExists(roomKey)) {
        req.session.roomKey = roomKey;
        req.session.save();
        res.redirect('/team/room');
        return;
    }

    res.render('index', {err: 'Invalid room key'});
}