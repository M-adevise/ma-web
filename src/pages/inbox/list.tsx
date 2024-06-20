import { Grid } from '@mui/material';
import { FC } from 'react';
import { RefineListView } from '../../components';
import { MessageItem } from '../../components/message/item';

export const MessageList: FC<any> = () => {
  return (
    <RefineListView>
      <Grid container direction='column' spacing={2}>
        <MessageItem />
        <MessageItem />
      </Grid>
    </RefineListView>
  );
};
