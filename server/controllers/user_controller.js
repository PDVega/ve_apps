const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const TOKEN_PASSWORD = 'forpassword';

const sendLoginFailedMessage = (req, res) => {
  res.send('Invalid username or password', 403);
}

exports.register = function createUser(req, res) {
  const userData = req.body;
  const password = userData.password;

  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      userData.password = hash;
      const user = new User(userData);
      user.save((err) => {
        if (!err) {
          res.send('Register Success!');
        } else {
          res.status(500).send('error');
        }
      });
    });
  });
};

exports.login = function signInUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username,
  }, (err, foundUser) => {
    if (!err) {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, (errCompare, bcryptResult) => {
          if (bcryptResult) {
            const token = jwt.sign({
              username: foundUser.username,
            }, TOKEN_PASSWORD);
            res.json({ token });
          } else {
            sendLoginFailedMessage(req, res);
          }
        });
      }
    } else {
      res.status(500).send('error');
    }
  });
};
