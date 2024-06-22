import { departmentApi, userApi } from './api';
import { Doctor } from './gen';
import { ProviderType } from './types';

export const doctorProvider: ProviderType<Doctor, Doctor> = {
  getAllBy: async function (params, filter) {
    const { firstName, lastName } = filter || {};
    if (params.hospitalId) {
      const { data } = await departmentApi().getDoctorsByHospitalsId(params.hospitalId);
      return data;
    }
    try {
      const { data } = await userApi().getDoctors(firstName, lastName);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getOneBy: async function (params) {
    if (params.doctorId) {
      const { data } = await userApi().getDoctorById(params.doctorId);
      return data;
    }
    throw new Error('doctorProvider.getOneBy no id was provided');
  },
  crupdate: async function (doctorId, doctor) {
    const { data } = await userApi().crupdateDoctor(doctorId, doctor);
    return data;
  },
};
