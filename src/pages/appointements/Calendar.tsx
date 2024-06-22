import { useList } from '@refinedev/core';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { Calendar, SlotInfo, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { v4 as uuidV4Generator } from 'uuid';
import { RefineListView } from '../../components';
import { getCached } from '../../utils';
import { CreateEventDialog } from './CreateEventDialog';
import { EditEventDrawer } from './EditEventDrawer';
import { CalendarEvent, EditEventDialogState } from './types';

export const CalendarPage: FC = () => {
  const userId = getCached.user().id;
  const localizer = momentLocalizer(moment);
  const [{ event: currentCalendarEvent, isDialogOpen, isDrawerOpen }, setEditEventDialogState] = useState<EditEventDialogState>({
    event: null,
    isDialogOpen: false,
    isDrawerOpen: false,
  });

  const { data: events } = useList<CalendarEvent>({ resource: 'appointments', meta: { by: 'doctorId', id: userId } });

  const handleToggleEditEventDialog = () => setEditEventDialogState(prevState => ({ ...prevState, isDialogOpen: !prevState.isDialogOpen }));
  const handleToggleEditEventDrawer = () => setEditEventDialogState(prevState => ({ ...prevState, isDrawerOpen: !prevState.isDrawerOpen }));

  const handleSelectEvent = (event: CalendarEvent, _event: React.SyntheticEvent<HTMLElement, Event>) => {
    setEditEventDialogState({ event, isDialogOpen: false, isDrawerOpen: true });
  };

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const event: CalendarEvent = {
      id: uuidV4Generator(),
      ...slotInfo,
      title: 'Event',
    };
    setEditEventDialogState({ event, isDialogOpen: true, isDrawerOpen: false });
  };

  return (
    <RefineListView>
      <Calendar
        selectable
        onSelectEvent={handleSelectEvent}
        localizer={localizer}
        onSelectSlot={handleSelectSlot}
        events={events?.data || []}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 600, width: '100%' }}
      />
      {currentCalendarEvent && <CreateEventDialog close={handleToggleEditEventDialog} event={currentCalendarEvent} isOpen={isDialogOpen} />}
      {currentCalendarEvent && <EditEventDrawer close={handleToggleEditEventDrawer} event={currentCalendarEvent} isOpen={isDrawerOpen} />}
    </RefineListView>
  );
};
