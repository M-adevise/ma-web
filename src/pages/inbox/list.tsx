import { FC } from 'react';
import { RefineListView } from '../../components';
import { Avatar, Grid, Paper, Theme, Typography, makeStyles } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
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
