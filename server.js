const express = require('express');
const mongoose = require('mongoose');
const config = require('./server/config');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const expressSession = require('express-session');

mongoose.connect(config.mongoUri);
require('./server/models/Produce');
require('./server/models/Pickup');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring Passport
app.use(expressSession({ secret: 'someSecretKey' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) =>
  User.authenticate(username, password, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);

    return done(null, user);
  })
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  user.findById(id, function (err, user) {
    done(err, user);
  });
});

// cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
// }

require('./server/routes/user')(app)
require('./server/routes/produce')(app)
require('./server/routes/pickup')(app)

app.listen(port, () => console.log(`Listening on port ${port}`));
