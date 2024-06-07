import { CalendarMonth, Dashboard as DashboardIcon, Group, History as HistoryIcon, Inbox, Radio as RadioIcon, StarOutline } from '@mui/icons-material';

export const appResources = [
  {
    name: 'inbox',
    list: '/',
    meta: {
      label: 'Inbox',
      icon: <Inbox />,
    },
  },
  {
    name: 'appointments',
    list: '/appointments',
    meta: {
      label: 'Appointments',
      icon: <CalendarMonth />,
    },
  },
  {
    name: 'patients',
    list: '/patients',
    meta: {
      label: 'Patients',
      icon: <Group />,
    },
  },
];
