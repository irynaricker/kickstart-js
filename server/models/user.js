const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  displayname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: String,
  picture: String
});

const SALT_WORK_FACTOR = 10;

userSchema.plugin(findOrCreate);
userSchema.plugin(uniqueValidator);

userSchema.pre('save', function (next) {
  var guest = this;

  // only hash the password if it has been modified (or is new)
  if (!guest.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(guest.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      guest.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.statics.authenticate = function (username, password, callback) {
  this.findOne({ username: username }, function (err, user) {
    if (err) return callback(err);

    if (!user) return callback(null, false);

    user.comparePassword(password, function (err, correct) {
      if (!correct) return callback(null, false, true);

      callback(null, user);
    });
  });
}

const User = mongoose.model('User', userSchema);
module.exports = User;
