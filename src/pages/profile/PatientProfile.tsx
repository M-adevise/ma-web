import { Avatar, Paper, Stack, Typography } from '@mui/material';

export const UserProfile = ({ user }: any) => {
  return (
    <Stack my={2} direction='row' justifyContent='space-between'>
      <Paper sx={{ minWidth: 400, mr: 2, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar src={user.photoId} alt='User Photo' sx={{ width: 200, height: 200 }} />
      </Paper>
      <Paper sx={{ flexGrow: 1, p: 2 }}>
        <Stack alignItems='center' mb={6}>
          <Typography variant='h4'>
            {user.firstName} {user.lastName}
          </Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-around'>
          <Stack>
            <Typography>
              <strong>NIC:</strong> {user.nic}
            </Typography>
            <Typography>
              <strong>Date of Birth:</strong> {new Date(user.birthDate).toLocaleDateString()}
            </Typography>
            <Typography>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography>
              <strong>Sex:</strong> {user.sex}
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              <strong>Contact:</strong> {user.contact}
            </Typography>
            <Typography>
              <strong>Address:</strong> {user.address}
            </Typography>
            <Typography>
              <strong>Country:</strong> {user.country}
            </Typography>
            <Typography>
              <strong>City:</strong> {user.city}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
