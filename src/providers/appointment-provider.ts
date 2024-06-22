import { CalendarEvent } from '../pages/appointements';
import { activityApi } from './api';
import { appointmentMapper } from './mapper';
import { calendarEventMapper } from './mapper/calendar-event-mapper';
import { ProviderType } from './types';

export const appointmentProvider: ProviderType<CalendarEvent, CalendarEvent> = {
  async getOneBy(params) {
    if (params.appointmentId) {
      const { data } = await activityApi().readAppointment(params.appointmentId);
      return appointmentMapper.toCalendarEvent(data || {});
    }
    throw new Error('appointmentProvider.getOneBy no id was provided');
  },
  async getAllBy(params) {
    if (params.doctorId) {
      const { data } = await activityApi().getDoctorAppointments(params.doctorId);
      return data.map(appointmentMapper.toCalendarEvent);
    }
    if (params.patientId) {
      const { data } = await activityApi().getPatientsAppointments(params.patientId);
      return data.map(appointmentMapper.toCalendarEvent);
    }
    throw new Error('appointmentProvider.getAllBy no id was provided');
  },
  async crupdate(appointmentId, calendarEvent) {
    const mappedAppointment = calendarEventMapper.toAppointment(calendarEvent);
    const { data } = await activityApi().crupdateAppointment(appointmentId, mappedAppointment);
    return appointmentMapper.toCalendarEvent(data || {});
  },
};
