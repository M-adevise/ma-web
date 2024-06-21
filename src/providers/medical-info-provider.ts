import { activityApi } from './api';
import { MedicalInfo } from './gen';
import { ProviderType } from './types';

export const medicalInfoProvider: ProviderType<File, MedicalInfo> = {
  async getOneBy(params) {
    if (params.patientId) {
      const { data } = await activityApi().readMedicalInfo(params.patientId);
      return data;
    }
    throw new Error('medicalInfoProvider.getOneBy no id was provided');
  },
  async crupdate(patientId, medicalInfo) {
    const { data } = await activityApi().crupdateMedicalInfo(patientId, medicalInfo);
    return data;
  },
  getAllBy: function (params: Record<`${string}Id`, string>): Promise<File[]> {
    throw new Error('Function not implemented.');
  },
};
