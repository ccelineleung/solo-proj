const { resolvePath } = require('react-router-dom');
const db = require('../models/dbModels');

const dataController = {};

dataController.storeData = (req, res, next) => {
  const {
    homeValue,
    downPayment,
    loanAmount,
    interestRate,
    loanTerm,
    monthlyPayment,
    username,
  } = req.body; //user should be an object from frontend
  const param = [
    homeValue,
    downPayment,
    loanAmount,
    interestRate,
    loanTerm,
    monthlyPayment,
    username,
  ];
  try {
    const dataQuery = `
    INSERT INTO homedata(homeValue,downPayment,loanAmount,interestRate,loanTerm,payment,username)
    VALUES($1,$2,$3,$4,$5,$6,$7)
    RETURNING *;
    `;
    db.query(dataQuery, param)
      .then((data) => {
        console.log(data);
      })
      .then(next());
  } catch (error) {
    return next({
      log: 'Express error in createUser middleware',
      status: 400,
      message: {
        err: `dataController.storeData: ERROR: ${error}`,
      },
    });
  }
};

dataController.getUserData = (req, res, next) => {
  try {
    const user = req.body.username;

    const getUserDataQuery = `
    SELECT * FROM homedata
    WHERE username = '${user}'`;
    db.query(getUserDataQuery).then((data) => {
      res.locals.list = data.rows;
      console.log(data.rows);
      return next();
    });
  } catch (error) {
    return next({
      log: 'Express error in createUser middleware',
      status: 400,
      message: {
        err: `dataController.getUserData : ERROR: ${error}`,
      },
    });
  }
};

module.exports = dataController;
