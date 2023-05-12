const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postLogin = async (req,res) => {
    
    try{
        //checar se o email é existente no banco
        const {mail,password} = req.body;
        const user = await User.findOne({mail:mail.toLowerCase()});

        //user é existente e faz a comparacao da senha q foi escrita com a q tá no banco
        if(user && (await bcrypt.compare(password,user.password))){
            
            //manda token de login
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

            return res.status(200).json({
                userDetails:{
                    mail:user.mail,
                    token:token,
                    username:user.username
                }
            })
        }

        //se user n foi achado:
        return res.status(400).send('Credenciais inválidas. Tente novamente.')

    }catch(error){
        return res.status(500).send('Algo deu errado ao logar. Tente novamente!');
    }
}

module.exports = postLogin;