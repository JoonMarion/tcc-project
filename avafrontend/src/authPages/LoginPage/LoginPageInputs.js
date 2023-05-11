import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
    return (
        <div>
            <InputWithLabel 
                value={mail} 
                setValue={setMail} 
                label="Email" 
                type="text" 
                placeholder="Insira seu e-mail" 
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Senha"
                type="password"
                placeholder="Insira sua senha"
            />
        </div>
    );
};

export default LoginPageInputs;
