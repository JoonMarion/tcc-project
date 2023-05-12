import React from 'react';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2f3136',
});

const FriendsSideBar = () => {
    return <MainContainer></MainContainer>;
};

export default FriendsSideBar;