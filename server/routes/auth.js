const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user_controller')

/* POST register new user. */
router.post('/register', Controller.register);

/* POST login user. */
router.post('/login', Controller.login);


module.exports = router;
