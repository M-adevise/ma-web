import { Dashboard as DashboardIcon, History as HistoryIcon, Radio as RadioIcon, StarOutline } from '@mui/icons-material';

export const appResources = [
  {
    name: 'appointments',
    list: '/',
    meta: {
      label: 'Appointments',
      icon: <DashboardIcon />,
    },
  },
  {
    name: 'patients',
    list: '/patients',
    meta: {
      label: 'Patients',
      icon: <HistoryIcon />,
    },
  },
  {
    name: 'profile',
    list: '/profile',
    meta: {
      label: 'Profile',
      icon: <StarOutline />,
    },
  },
];
