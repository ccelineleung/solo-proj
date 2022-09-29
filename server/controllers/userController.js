const { UNSAFE_NavigationContext } = require('react-router-dom');
const db = require('../models/dbModels');

const userController = {};

//create user
userController.createUser = (req, res, next) => {
  const { username, password } = req.body; //user should be an object from frontend

  const param = [username, password];

  try {
    const newCharQuery = `
    INSERT INTO users(name, password)
    VALUES($1,$2)
    RETURNING *;
    `;
    db.query(newCharQuery, param)
      .then((data) => {
        // console.log(data);
        res.locals.user = data;
      })
      .then(next());
  } catch (error) {
    return next({
      log: 'Express error in createUser middleware',
      status: 400,
      message: {
        err: `userController.createUser: ERROR: ${error}`,
      },
    });
  }
};

userController.verifyUser = (req, res, next) => {
  return next();
};

module.exports = userController;
