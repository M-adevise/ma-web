import { Delete, Forward30Sharp, Star } from '@mui/icons-material';
import { Avatar, Grid, Paper, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { FC } from 'react';

const useStyles = {
  paper: {
    padding: 10,
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    marginRight: 5,
  },
  content: {
    flex: 1,
    marginLeft: 8,
  },
  senderName: {
    fontWeight: 'bold',
  },
  messageSnippet: {
    color: blue[200],
  },
  timestamp: {
    marginRight: 5,
    color: grey[800],
  },
};

export const MessageItem: FC<{}> = ({ avatarSrc, senderName, messageSnippet, timestamp }: any) => {
  return (
    <Grid item alignItems='center'>
      <Paper style={useStyles.paper}>
        <Avatar src={avatarSrc} style={useStyles.avatar} />
        <div style={useStyles.content}>
          <Typography variant='body1' style={useStyles.senderName}>
            {'Ny Hasina VAGNO'}
          </Typography>
          <Typography variant='body2' style={useStyles.messageSnippet}>
            {'Hello Doctor!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ...'}
          </Typography>
        </div>
        <Typography style={useStyles.timestamp}>{new Date().toUTCString()}</Typography>
        <Delete />
        <Forward30Sharp />
        <Star />
      </Paper>
    </Grid>
  );
};
