import React from 'react';
import { RefineListView } from '../../components';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import moment from 'moment';

const localizer = momentLocalizer(moment);

export const CalendarPage: React.FC = () => {
  return (
    <RefineListView>
      <Calendar localizer={localizer} events={[]} startAccessor='start' endAccessor='end' style={{ height: 600, width: '100%' }} />
    </RefineListView>
  );
};
