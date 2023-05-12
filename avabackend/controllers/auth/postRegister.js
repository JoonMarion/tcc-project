const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postRegister = async (req,res) => {
    try{
        //logica de registrar nova conta
        const { username,mail,password} = req.body;

        //user já existe?
        const userExists = await User.exists({ mail:mail.toLowerCase() });
        if(userExists){
            return res.status(409).send('Email já está sendo utilizado!') //para aqui se já existir
        }

        //encriptar a senha
        const encryptedPassword = await bcrypt.hash(password,10);

        //cria o user e salva no banco
        const user = await User.create({
            username:username,
            mail:mail.toLowerCase(),
            password:encryptedPassword,
        })

        //cria o token jwt pra esse usuario e tetorna p ele
         const token = jwt.sign(
            {
              userId:user._id,
              mail  
            },
            process.env.TOKEN_KEY,
            {
                expiresIn:'24h'
            }

            
        );

        //deu tudo certo ai diz pra ele q deu td certo
        res.status(201).json({
            userDetails:{
                mail:user.mail,
                token:token,
                username:user.username
            }
        })
    }catch(err){
        return res.status(500).send('Erro. Tente novamente...')
    }
}

module.exports = postRegister;