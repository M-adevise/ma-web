import { communicationApi } from './api';
import { Channel } from './gen';
import { ProviderType } from './types';

export const channelProvider: ProviderType<Channel, Channel> = {
  async getAllBy(params) {
    if (params.userId) {
      const { data } = await communicationApi().getChannels(params.doctorId);
      return data;
    }
    throw new Error('patientProvider.getAllBy no id was provided');
  },
  async crupdate(channelId, body) {
    const { data } = await communicationApi().crupdateChannel(channelId, body);
    return data;
  },
  getOneBy: function (params: Record<`${string}Id`, string>): Promise<Channel> {
    throw new Error('Function not implemented.');
  },
};
