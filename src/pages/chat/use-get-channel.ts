import { useCreate, useList } from '@refinedev/core';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as v4UuidGenerator } from 'uuid';
import { Channel } from '../../providers';
import { getCached } from '../../utils';

export const useGetChannel = () => {
  const userId = getCached.user().id;
  const { contactId } = useParams();

  const { data: channels, refetch: refetchChannel } = useList<Channel>({ resource: 'channel' });
  const currentChannels = channels?.data?.filter(channel => channel.invited === contactId) || [];
  const { mutateAsync: createChannel } = useCreate<Channel>();

  useEffect(() => {
    if (currentChannels.length === 0) {
      const channelId = v4UuidGenerator();
      const newChannel: Channel = {
        creator: userId,
        id: channelId,
        invited: contactId,
      };
      createChannel({
        resource: 'channel',
        values: newChannel,
        meta: { id: channelId },
      }).then(() => {
        refetchChannel();
      });
    }
  }, [currentChannels]);

  return currentChannels.length === 0 ? null : currentChannels[0];
};
