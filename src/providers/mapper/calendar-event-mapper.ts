import { CalendarEvent } from '../../pages/appointements';
import { Appointment } from '../gen';

export const calendarEventMapper = {
  toAppointment(appointment: CalendarEvent): Appointment {
    const { id, organizer, participant, roomId, end, start, title } = appointment;
    return {
      to: new Date(end || '').toISOString(),
      from: new Date(start || '').toISOString(),
      id: id || '',
      summary: title || '',
      organizer,
      participant,
      roomId,
    };
  },
};
