import { CalendarMonth, Face, Group, Inbox, Lightbulb } from '@mui/icons-material';

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
  {
    name: 'assistance',
    list: '/assistance',
    meta: {
      label: 'AI Assistances',
      icon: <Lightbulb />,
    },
  },
  {
    name: 'profile',
    list: '/profile',
    meta: {
      label: 'Profile',
      icon: <Face />,
    },
  },
];
