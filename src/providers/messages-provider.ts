import { communicationApi } from './api';
import { Message } from './gen';
import { ProviderType } from './types';

export const messageProvider: ProviderType<Message, Message> = {
  async crupdate(messageId, message) {
    //TODO: use userId from cache
    const userId = '';
    const { data } = await communicationApi().crupdateMessage(messageId, userId, message);
    return data;
  },
  async getAllBy(params) {
    if (params.channelId) {
      const { data } = await communicationApi().getMessageByChannelId(params.channelId);
      return data;
    }
    throw new Error('messagesProvider.getAllBy no id was provided');
  },
  getOneBy: function (params: Record<`${string}Id`, string>): Promise<Message> {
    throw new Error('Function not implemented.');
  },
};
