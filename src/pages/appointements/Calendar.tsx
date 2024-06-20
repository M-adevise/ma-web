import moment from 'moment';
import React, { FC, useState } from 'react';
import { Calendar, SlotInfo, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { v4 as uuidV4Generator } from 'uuid';
import { RefineListView } from '../../components';
import { EditEventDialog } from './EditEventDialog';
import { CalendarEvent, EditEventDialogState } from './types';

export const CalendarPage: FC = () => {
  const localizer = momentLocalizer(moment);
  const [{ event: currentCalendarEvent, isOpen: isEditEventDialogOpen }, setEditEventDialogState] = useState<EditEventDialogState>({ event: null, isOpen: false });

  const handleToggleEditEventDialog = () => setEditEventDialogState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));

  const handleSelectEvent = (event: CalendarEvent, e: React.SyntheticEvent<HTMLElement, Event>) => {
    setEditEventDialogState({ event: event, isOpen: true });
  };

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    const event: CalendarEvent = {
      id: uuidV4Generator(),
      end,
      start,
      title: 'Event',
    };
    setEditEventDialogState({ event, isOpen: true });
  };

  return (
    <RefineListView>
      <Calendar
        selectable
        onSelectEvent={handleSelectEvent}
        localizer={localizer}
        onSelectSlot={handleSelectSlot}
        //TODO: put here all event from back end
        events={[]}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 600, width: '100%' }}
      />
      {currentCalendarEvent && <EditEventDialog close={handleToggleEditEventDialog} event={currentCalendarEvent} isOpen={isEditEventDialogOpen} />}
    </RefineListView>
  );
};
