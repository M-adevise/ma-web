import { FC } from 'react';
import { RefineListView } from '../../components';
import { Grid, Paper, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

export const ProfilePage: FC<{}> = () => {
  return (
    <RefineListView>
      <Paper
        variant='elevation'
        elevation={2}
        sx={{
          padding: 2,
          backgroundColor: blue[300],
          color: 'white',
        }}>
        <Grid>
          <Grid>
            <Typography>Ny Hasina VAGNO</Typography>
          </Grid>
        </Grid>
      </Paper>
    </RefineListView>
  );
};
