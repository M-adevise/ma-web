import { activityApi } from './api';
import { MedicalInfo } from './gen';

export const medicalInfoProvider = {
  async getByPatientId(patientId: string) {
    const { data } = await activityApi().readMedicalInfo(patientId);
    return data;
  },
  async crupdateByPatientId(patientId: string, medicalInfo: MedicalInfo) {
    const { data } = await activityApi().crupdateMedicalInfo(patientId, medicalInfo);
    return data;
  },
};
