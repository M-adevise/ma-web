import { Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { FC, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { RefineListView } from '../../components';
import { zegoProvider } from '../../providers/zego-provider';

export const CallPage: FC = () => {
  const localUserRef = useRef<HTMLDivElement>(null);
  const remoteUserRef = useRef<HTMLDivElement>(null);
  const { roomId = '' } = useParams();

  useQuery({
    queryKey: ['call', roomId],
    queryFn: () => {
      if (localUserRef.current && remoteUserRef.current) {
        zegoProvider.joinCall(roomId, localUserRef.current);
        zegoProvider.updateCall(roomId, remoteUserRef.current);
      }
      return null;
    },
    enabled: !!localUserRef.current,
  });

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
          <div ref={remoteUserRef}></div>
        </Grid>
      </Grid>
    </RefineListView>
  );
};
