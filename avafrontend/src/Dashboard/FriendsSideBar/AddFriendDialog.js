import React, { useEffect } from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, senFriendInvitation = () => {} }) => {
    const [mail, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');
    const handleSendInvitation = () => {};
    const handleCloseDialog = () => {
        setEmail('');
        closeDialogHandler();
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Adicionar um amigo</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Para adicionar um amigo, digite o email dele no campo abaixo e clique em enviar.
                        </Typography>
                    </DialogContentText>
                    <InputWithLabel
                        label="Email"
                        type="text"
                        value={mail}
                        setValue={setEmail}
                        placheolder="Digite o email do seu amigo"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Enviar"
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddFriendDialog;
