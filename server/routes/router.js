const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const dataController = require('../controllers/dataController');
const router = express.Router();

// router.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../src/component/Login.js'));
// });

router.post('/userdata', dataController.getUserData, (req, res) => {
  res.status(200).json(res.locals.list);
});

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(true);
  //   ('true');
});

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.auth);
});

router.post('/data', dataController.storeData, (req, res) => {
  res.status(200).json([]);
});

module.exports = router;
