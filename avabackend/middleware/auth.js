const jwt = require('jsonwebtoken');

config = process.env;

//se a logica der certo, executa o next q vai ser uma funcao
const verifyToken = (req,res,next) => {

    let token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token){
        return res.status(403).send('Token é requerido para autenticação')
    }

    try{
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;

    }catch(err){
        return res.status(401).send('Invalido o Token!');
    }

    return next();
}

module.exports = verifyToken;