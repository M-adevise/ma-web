import { userApi } from './api';

export const patientProvider = {
  async getOne(patientId: string) {
    const { data } = await userApi().getPatientById(patientId);
    return data;
  },
  async getAllByDoctorId(doctorId: string) {
    const { data } = await userApi().getPatientsByDoctorId(doctorId);
    return data;
  },
};
