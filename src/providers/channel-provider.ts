import { getCached } from '../utils';
import { communicationApi } from './api';
import { Channel } from './gen';
import { ProviderType } from './types';

export const channelProvider: ProviderType<Channel, Channel> = {
  async getAllBy(params) {
    const userId = getCached.user().id;
    const { data } = await communicationApi().getChannels(userId);
    return data;
  },
  async crupdate(channelId, body) {
    const { data } = await communicationApi().crupdateChannel(channelId, body);
    return data;
  },
  getOneBy: function (params: Record<`${string}Id`, string>): Promise<Channel> {
    throw new Error('Function not implemented.');
  },
};
