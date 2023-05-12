import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
    return 'Nome de usuário deve conter entre 3 e 12 caracteres e a senha deve conter entre 6 e 12 caracteres';
};

const getFormValidMessage = () => {
    return 'Clique para registrar';
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    };

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label="Registrar"
                        additionalStyles={{ marginTop: '20px' }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Já possui uma conta? "
                redirectText="Faça login"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;
