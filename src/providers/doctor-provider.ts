import { userApi } from './api';
import { Doctor } from './gen';

export const doctorProvider = {
  async getAll() {
    const { data } = await userApi().getDoctors();
    return data;
  },
  async getOne(doctorId: string) {
    const { data } = await userApi().getDoctorById(doctorId);
    return data;
  },
  async crupdate(doctorId: string, doctor: Doctor) {
    const { data } = await userApi().crupdateDoctor(doctorId, doctor);
    return data;
  },
};
