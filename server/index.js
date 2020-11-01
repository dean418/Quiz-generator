const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const roomRouter = require('./routes/roomRouter');
const teamRouter = require('./routes/teamRouter.js');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: false
    }
}));

app.use('/room', roomRouter);
app.use('/team', teamRouter);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
});