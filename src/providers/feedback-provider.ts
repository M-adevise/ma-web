import { activityApi } from './api';
import { Feedback, FeedbackSummary } from './gen';
import { ProviderType } from './types';

export const feedbackProvider: ProviderType<FeedbackSummary, Feedback> = {
  getAllBy: async function (params) {
    throw new Error('Function not implemented.');
  },
  getOneBy: async function (params) {
    if (params.doctorId) {
      const { data } = await activityApi().getDoctorFeedbacks(params.doctorId);
      return data;
    }
    throw new Error('feedbackProvider.getOneBy no id was provided');
  },
  crupdate: async function (doctorId, feedback) {
    const { data } = await activityApi().giveFeedBacks(doctorId, feedback);
    return data as any;
  },
};
