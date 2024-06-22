import { CalendarEvent } from '../../pages/appointements';
import { Appointment } from '../gen';

export const appointmentMapper = {
  toCalendarEvent(appointment: Appointment): CalendarEvent {
    const { from, id, organizer, participant, roomId, summary, to } = appointment;
    return {
      end: new Date(to || ''),
      start: new Date(from || ''),
      id: id || '',
      title: summary || '',
      organizer,
      participant,
      roomId,
    };
  },
};
