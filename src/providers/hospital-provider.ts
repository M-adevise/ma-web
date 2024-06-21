import { departmentApi } from './api';
import { Hospital } from './gen';
import { ProviderType } from './types';

export const hospitalProvider: ProviderType<Hospital, Hospital> = {
  async getAllBy() {
    const { data } = await departmentApi().getHospitals();
    return data;
  },
  async crupdateAll(hospital: Hospital[]) {
    const { data } = await departmentApi().crupdateHospital(hospital);
    return data;
  },
  getOneBy: function (params: Record<`${string}Id`, string>): Promise<Hospital> {
    throw new Error('Function not implemented.');
  },
  crupdate: function (id: string, body: Hospital): Promise<Hospital> {
    throw new Error('Function not implemented.');
  },
};
