const express = require('express');
const router = express.Router();
const authControlers = require('../controllers/auth/authControllers');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');


//definir um schema de validaçõa para os dados...joi.object retorna um objeto do tipo schema,que é objeto joi q é validacao em js
//vai funcionar como um midleware, toda vez q for usada alguma rota q trata dados, vem aqui e vê se os dados estão ok
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(), //ex: username é uma string de no maximo 12 caracteres e no minimo 3
    password: Joi.string().min(6).max(12).required(),
    mail:Joi.string().email().required(),
})


const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail:Joi.string().email().required()
})

router.post('/register',validator.body(registerSchema),authControlers.controllers.postRegister)

router.post('/login',validator.body(loginSchema),authControlers.controllers.postLogin)

//rota teste para o midleware do jwt
router.get('/test',auth,(req,res) => {
    res.send('passou a request')
})

module.exports = router;