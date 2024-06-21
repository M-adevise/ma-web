import { userApi } from './api';

export const userProvider = {
  async updateProfilePic(userId: string, profilePic: File) {
    const { data } = await userApi().updateProfilePic(userId, profilePic);
    return data;
  },
};
