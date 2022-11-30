
const db = require('../models/dbModels');

const userController = {};




// Sign up route: create user in database
userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  const param = [username, password];

  try {
    const newCharQuery = `
    INSERT INTO users(name, password)
    VALUES($1,$2)
    RETURNING *;
    `;

    const result = await db.query(newCharQuery, param);

    res.locals.status = { status: true, message: 'account has been created!' };

    return next();
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

// Sign up route: check if user already exists in database
userController.vertifyUser = async (req, res, next) => {
  const { username } = req.body;

  const param = [username];

  try {
    // Find user in database
    const verifyUserQuery = `
    SELECT * FROM users
    WHERE name = $1`;

    // Query result
    const verifyResult = await db.query(verifyUserQuery, param);

    // User does not exist in database
    if (verifyResult.rows.length === 0) {
      console.log(verifyResult.rows)
      // proceed to next middleware to create user
      return next();
    } else {
      // User exists in database
      // Terminate middleware and send back error message to client
      return res
        .status(404)
        .json({ status: false, message: 'Username already existed!' });
    }
  } catch (error) {
    return next({
      log: 'Express error in vertifyUser middleware',
      status: 400,
      message: {
        err: `userController.verifyUser: ERROR: ${error}`,
      },
    });
  }
};

userController.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  const param = [username];

  try {
    const newNameQuery = `
    SELECT * FROM users 
    WHERE name = $1`;

    const data = await db.query(newNameQuery, param);

    // if the password matches the password in DB
    if (data.rows[0].password === password) {
      res.locals.status = { status: true, message: 'Successful Login!' };
    } else {
      res.locals.status = { status: false, message: 'Wrong Password!' };
    }

    return next();
  } catch (error) {
    return next({
      log: 'Express error in loginUser middleware',
      status: 400,
      message: {
        err: `userController.loginUser: ERROR: ${error}`,
      },
    });
  }
};

module.exports = userController;
