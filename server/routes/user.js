const db = require('../models')

module.exports = app => {
  app.get('/user', (req, res) => {
    res.send('user get').status(200);
  });

  app.post('/user', (req, res) => {
    db.User.authenticate(req.body.email, req.body.password, (err, newUser, incorrectPassword) => {
      if (err) return res.status(500)
      if (incorrectPassword) {
        return res.send('wrong password').status(400)
      }
      if (!newUser) {
        return db.User.findOrCreate({
          displayname: req.body.displayname,
          username: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          picture: req.body.picture
        }, (err) => {
          if (err) return res.status(500)
          // new user created
          return res.json({
            displayname: req.body.displayname,
            username: req.body.email,
            phone: req.body.phone,
            picture: req.body.picture
          }).status(200)
        })
      }
      // user password matches
      res.json({
        displayname: req.body.displayname,
        username: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture
      }).status(200)
    })
  });
};
