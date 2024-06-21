import { activityApi } from './api';
import { Appointment } from './gen';

export const appointmentProvider = {
  async getOne(appointmentId: string) {
    const { data } = await activityApi().readAppointment(appointmentId);
    return data;
  },
  async getAllByDoctorId(doctorId: string) {
    const { data } = await activityApi().getDoctorAppointments(doctorId);
    return data;
  },
  async getAllByPatientId(patientId: string) {
    const { data } = await activityApi().getPatientsAppointments(patientId);
    return data;
  },
  async crupdate(appointmentId: string, appointment: Appointment) {
    const { data } = await activityApi().crupdateAppointment(appointmentId, appointment);
    return data;
  },
};
