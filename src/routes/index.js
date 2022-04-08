const express = require('express');
const controller = require("../controllers/");
const { body } = require("express-validator")

const router = express.Router();

const validatorPostLogin = [
    body('email').isEmail().notEmpty().withMessage('mensaje requerido')
]

router.get('/login', controller.login)
router.post('/login', validatorPostLogin ,controller.auth)

router.get('/:id', controller.renderCV)

module.exports = router;
