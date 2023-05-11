import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
    return 'Preencha corretamente o endereço de e-mail e a senha que deve conter entre 6 e 12 caracteres';
};

const getFormValidMessage = () => {
    return 'Clique para entrar';
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate('/register');
    };

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label="Entrar"
                        additionalStyles={{ marginTop: '20px' }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Não tem uma conta? "
                redirectText="Cadastre-se"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;
