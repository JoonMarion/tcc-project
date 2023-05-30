import React from 'react';
import { styled } from '@mui/system';
import FriendListItem from './FriendListItem';

const DUMMY_FRIENDS = [
    {
        id: '1',
        username: 'John Doe',
        isOnline: true,
    },
    {
        id: '2',
        username: 'Jane Doe',
        isOnline: false,
    },
    {
        id: '3',
        username: 'John Smith',
        isOnline: true,
    },
];

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
});

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((f) => (
                <FriendListItem username={f.username} id={f.id} key={f.id} isOnline={f.isOnline} />
            ))}
        </MainContainer>
    );
};

export default FriendsList;
