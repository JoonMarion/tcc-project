import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
    color: '#00aff4',
    cursor: 'pointer',
    fontWeight: 500,
});

const RedirectInfo = ({ text, redirectText, additionalStyles, redirectHandler }) => {
    return (
        <Typography sx={{ color: '#72767d' }} style={additionalStyles ? additionalStyles : {}} variant="subtitle2">
            {text}
            <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
        </Typography>
    );
};

export default RedirectInfo;
