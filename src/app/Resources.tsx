import { CalendarMonth as CalendarMonthIcon, Chat as ChatIcon, Face as FaceIcon, Group as GroupIcon, Inbox as InboxIcon, Lightbulb as LightbulbIcon } from '@mui/icons-material';
import { ResourceProps } from '@refinedev/core';

export const appResources: ResourceProps[] = [
  {
    name: 'inbox',
    list: '/',
    meta: {
      label: 'Inbox',
      icon: <InboxIcon />,
    },
  },
  {
    name: 'appointments',
    list: '/appointments',
    meta: {
      label: 'Appointments',
      icon: <CalendarMonthIcon />,
    },
  },
  {
    name: 'patients',
    list: '/patients',
    meta: {
      label: 'Patients',
      icon: <GroupIcon />,
    },
  },
  {
    name: 'assistance',
    list: '/assistance',
    meta: {
      label: 'AI Assistances',
      icon: <LightbulbIcon />,
    },
  },
  {
    name: 'profile',
    list: '/profile',
    meta: {
      label: 'Profile',
      icon: <FaceIcon />,
    },
  },
  {
    name: 'chat',
    list: '/chat',
    meta: {
      label: 'Message direct',
      icon: <ChatIcon />,
    },
  },
];
