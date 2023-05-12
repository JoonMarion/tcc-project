import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {
    const { mail, setMail, username, setUsername, password, setPassword, isFormValid, setIsFormValid } = props;

    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="E-mail"
                type="text"
                placeholder="Digite seu e-mail"
            />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label="Nome de usuário"
                type="text"
                placeholder="Digite seu nome de usuário"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
            />
            
        </>
    );
};

export default RegisterPageInputs;
