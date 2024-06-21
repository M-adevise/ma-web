import { userApi } from './api';
import { Patient } from './gen';
import { ProviderType } from './types';

export const patientProvider: ProviderType<Patient, Patient> = {
  async getOneBy(params) {
    if (params.patientId) {
      const { data } = await userApi().getPatientById(params.patientId);
      return data;
    }
    throw new Error('patientProvider.getOneBy no id was provided');
  },
  async getAllBy(params) {
    if (params.doctorId) {
      const { data } = await userApi().getPatientsByDoctorId(params.doctorId);
      return data;
    }
    throw new Error('patientProvider.getAllBy no id was provided');
  },
  crupdate: function (id: string, body: Patient): Promise<Patient> {
    throw new Error('Function not implemented.');
  },
};
