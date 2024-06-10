import { FC, useEffect, useRef } from 'react';
import { RefineListView } from '../../components';
import { Grid, Paper, Typography } from '@mui/material';
import { ZegoProvider } from '../../providers/zego-provider';

export const CallPage: FC = () => {
  const localUserRef = useRef<HTMLElement>();
  const remoteUseref = useRef<HTMLElement>();

  const call = () => {
    ZegoProvider.joinCall('room3', 'nyhasina', localUserRef.current, 'token');
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <RefineListView>
      <Grid container direction='row' spacing={5}>
        <Grid
          item
          sx={{
            width: 500,
          }}>
          <Typography>You</Typography>
          <div ref={localUserRef}></div>
        </Grid>
        <Grid
          item
          sx={{
            width: 500,
          }}>
          <Typography>Remote</Typography>
          <div ref={remoteUseref}></div>
        </Grid>
      </Grid>
    </RefineListView>
  );
};
