const { body } = require('express-validator');

const validationsTestimony = [
  body('name')
    .notEmpty()
    .withMessage('Input required')
    .bail()
    .isString()
    .withMessage('The value should be type string.')
    .isLength({ min: 5 })
    .withMessage('String must be more than 4 characters')
    .bail(),
  body('content')
    .notEmpty()
    .withMessage('Input required')
    .bail()
    .isString()
    .withMessage('The value should be type string.'),
];

module.exports = {
  validationsTestimony,
};
