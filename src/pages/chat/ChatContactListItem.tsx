import { Avatar, Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContactListItemProps } from './types';

export const ChatContactListItem: FC<ChatContactListItemProps> = ({ name, avatar, id }) => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={goToChat}>
        <Box mr={1}>
          <Avatar alt={id} src={avatar} />
        </Box>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
