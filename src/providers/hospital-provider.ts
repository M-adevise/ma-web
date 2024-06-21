import { departmentApi } from './api';
import { Hospital } from './gen';

export const hospitalProvider = {
  async getAll() {
    const { data } = await departmentApi().getHospitals();
    return data;
  },
  async crupdate(hospital: Hospital[]) {
    const { data } = await departmentApi().crupdateHospital(hospital);
    return data;
  },
};
