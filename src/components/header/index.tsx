import { Notifications } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useGetIdentity } from '@refinedev/core';
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from '@refinedev/mui';
import { useContext } from 'react';
import { ColorModeContext } from '../../contexts';
import { User, fileProvider } from '../../providers';

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { data: user } = useGetIdentity<User>();

  return (
    <AppBar
      color='default'
      position='sticky'
      elevation={0}
      sx={{
        '& .MuiToolbar-root': {
          minHeight: '64px',
        },
        height: '64px',
        borderBottom: theme => `1px solid ${theme.palette.divider}`,
        backgroundColor: theme => theme.palette.background.paper,
      }}>
      <Toolbar
        sx={{
          paddingLeft: {
            xs: '0',
            sm: '16px',
            md: '24px',
          },
        }}>
        <Box
          minWidth='40px'
          minHeight='40px'
          marginRight={{
            xs: '0',
            sm: '16px',
          }}
          sx={{
            '& .MuiButtonBase-root': {
              marginLeft: 0,
              marginRight: 0,
            },
          }}>
          <HamburgerMenu />
        </Box>
        <Stack
          direction='row'
          width='100%'
          justifyContent='flex-end'
          alignItems='center'
          gap={{
            xs: '8px',
            sm: '24px',
          }}>
          <Notifications />
          <Stack
            direction='row'
            alignItems='center'
            spacing={{
              xs: '8px',
              sm: '24px',
            }}>
            <Stack
              direction='row'
              gap={{
                xs: '8px',
                sm: '16px',
              }}
              alignItems='center'
              justifyContent='center'>
              <Stack>
                <Typography
                  fontSize={{
                    xs: '12px',
                    sm: '14px',
                  }}
                  variant='subtitle1'>
                  {user?.first_name}
                </Typography>
                <Typography
                  fontSize={{
                    xs: '12px',
                    sm: '14px',
                  }}
                  variant='subtitle2'
                  color='text.secondary'>
                  {user?.last_name}
                </Typography>
              </Stack>
              <Avatar src={fileProvider.getUrl(user?.photo_id || '')} alt={user?.first_name} />
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
