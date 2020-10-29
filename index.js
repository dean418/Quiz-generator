const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const express = require('express');

const roomRouter = require('./routes/roomRouter');
const teamRouter = require('./routes/teamRouter.js');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

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
        secure: process.env.IN_PROD
    }
}));

app.use('/room', roomRouter);
app.use('/team', teamRouter);

app.listen(3000, () => {
    console.log(`server listening on port ${process.env.port || 3000}`)
});