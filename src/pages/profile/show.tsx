import { Star } from '@mui/icons-material';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { blue, green, pink, red } from '@mui/material/colors';
import { FC } from 'react';
import img from '../../assets/logo.png';
import { RefineListView } from '../../components';
import { UserProfile } from './PatientProfile';

const user = {
  id: '123456',
  lastName: 'Doe',
  authenticationId: 'auth123',
  firstName: 'John',
  nic: '987654321',
  birthDate: '1990-01-01T00:00:00.000Z',
  email: 'john.doe@example.com',
  photoId: '/path/to/photo.jpg',
  sex: 'MALE',
  contact: '+1234567890',
  address: '1234 Main St',
  country: 'USA',
  city: 'New York',
  role: 'ADVISOR',
  doctorId: 'doc123',
  documentId: 'doc567',
};

export const ProfilePage: FC<{}> = () => {
  return (
    <RefineListView>
      <UserProfile user={user} />
      <Paper
        sx={{
          height: 450,
          alignItems: 'center',
          padding: 3,
        }}>
        <Paper
          sx={{
            height: 400,
            backgroundColor: pink[900],
          }}>
          <Grid container direction='row' height='100%' alignItems='center'>
            <Grid item height='100%'>
              <img
                src={img}
                alt='profile pic'
                style={{
                  height: '100%',
                }}
              />
            </Grid>
            <Grid item color='white' padding={12}>
              <Typography variant='h4'>Dr. Ny Hasina Marolahy VAGNO</Typography>
              <Typography variant='h5'>Oncologist and Cardiologue</Typography>
              <Typography variant='caption'>VN Hospital, Madagascar</Typography>
              <Typography>
                <Star color='warning' />
                <Star color='warning' />
                <Star color='warning' />
                <Star color='warning' />
                <Star />
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  marginTop: 5,
                }}>
                You have total{' '}
                <span
                  style={{
                    color: 'yellow',
                  }}>
                  12 Appointements
                </span>{' '}
                Today!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
      <Paper
        sx={{
          padding: 2,
          marginBlock: 2,
        }}>
        <Grid container spacing={3} paddingInline={4}>
          <Grid item>
            <Card sx={{ width: 250, color: 'black', bgcolor: green[200] }}>
              <CardContent>
                <Typography variant='body1'>Total Patients</Typography>
                <Typography variant='h2' sx={{}}>
                  473
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, color: 'black', bgcolor: pink[200] }}>
              <CardContent>
                <Typography variant='body1'>Donations</Typography>
                <Typography variant='h2' sx={{}}>
                  236
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, color: 'black', bgcolor: red[200] }}>
              <CardContent>
                <Typography variant='body1'>Score (5)</Typography>
                <Typography variant='h2' sx={{}}>
                  4.5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: 250, color: 'black', bgcolor: blue[200] }}>
              <CardContent>
                <Typography variant='body1'>Surgery</Typography>
                <Typography variant='h2' sx={{}}>
                  132
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </RefineListView>
  );
};
