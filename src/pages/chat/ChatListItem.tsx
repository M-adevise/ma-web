import { ListItem, ListItemText, Stack, SxProps } from '@mui/material';
import { FC } from 'react';
import { ChatListItemProps } from './types';

const TextContainerStyle: SxProps = { maxWidth: 400, bgcolor: '#00000010', padding: 2, borderRadius: 2 };

const getRadiusType = (isFromMe: boolean) => (!isFromMe ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 });

export const ChatListItem: FC<ChatListItemProps> = ({ isFromMe, message }) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: !isFromMe ? 'flex-start' : 'flex-end', marginY: 1 }} disablePadding>
      <Stack sx={{ ...TextContainerStyle, ...getRadiusType(isFromMe) }}>
        <ListItemText primary={message} />
      </Stack>
    </ListItem>
  );
};
