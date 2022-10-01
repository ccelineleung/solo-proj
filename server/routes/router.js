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

router.post(
  '/signup',
  userController.vertifyUser,
  userController.createUser,
  (req, res) => {
    res.status(200).json(res.locals.status);
  }
);

router.post('/login', userController.loginUser, (req, res) => {
  res.status(200).json(res.locals.status);
});

router.post('/data', dataController.storeData, (req, res) => {
  res.status(200).json([]);
});

module.exports = router;
