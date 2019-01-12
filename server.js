const express = require('express');
const mongoose = require('mongoose');
const config = require('./server/config');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const expressSession = require('express-session');

mongoose.connect(config.mongoUri)

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

// To Do List / Faux data store
let toDoList = [
  'Create an awesome hackathon project!',
  'Don\'t forget to take a break'
];

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ toDoList });
});

app.post('/api/addItem', (req, res) => {
  // displays in the terminal
  console.log(req.body);
  toDoList.push(req.body.post);
  res.send('Item added!');
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

app.listen(port, () => console.log(`Listening on port ${port}`));
