import React from 'react';
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2f3136',
});

const FriendsSideBar = () => {
    return (
        <MainContainer>
            <AddFriendButton />
            <FriendsTitle title="Mensagens Privadas" />
            <FriendsList />
            <FriendsTitle title="Convites" />
            <PendingInvitationsList />
        </MainContainer>
    );
};

export default FriendsSideBar;
