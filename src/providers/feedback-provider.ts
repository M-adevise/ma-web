import { activityApi } from './api';
import { Feedback } from './gen';

export const feedbackProvider = {
  async getByDoctorId(doctorId: string) {
    const { data } = await activityApi().getDoctorFeedbacks(doctorId);
    return data;
  },
  async crupdateByDoctorId(doctorId: string, feedback: Feedback) {
    const { data } = await activityApi().giveFeedBacks(doctorId, feedback);
    return data;
  },
};
