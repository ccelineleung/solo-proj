const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../src/component/Login.js'));
// });

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(true);
  //   ('true');
});

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.auth);
});

module.exports = router;
