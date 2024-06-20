import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';
import { RefineListView } from '../../components';

export const CallPage: FC = () => {
  const localUserRef = useRef<HTMLDivElement>(null);
  const remoteUseref = useRef<HTMLDivElement>(null);

  const call = () => {
    // localUserRef.current && ZegoProvider.joinCall('room3', 'nyhasina', localUserRef.current, 'token');
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
