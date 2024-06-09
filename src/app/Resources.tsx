import { AttachMoneyTwoTone, CalendarMonth, Feedback, Group, Inbox, Lightbulb } from '@mui/icons-material';

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
    name: 'assitance',
    list: '/assitance',
    meta: {
      label: 'AI Assitances',
      icon: <Lightbulb />,
    },
  },
  {
    name: 'feedbacks',
    list: '/feedbacks',
    meta: {
      label: 'Feedbacks',
      icon: <Feedback />,
    },
  },
  {
    name: 'donations',
    list: '/donations',
    meta: {
      label: 'Donations',
      icon: <AttachMoneyTwoTone />,
    },
  },
];
