import { List } from '@mui/material';
import { useList } from '@refinedev/core';
import { FC, useEffect, useRef } from 'react';
import { Message } from '../../providers';
import { getCached } from '../../utils';
import { ChatListItem } from './ChatListItem';

interface ChatListProps {
  channelId?: string;
}

export const ChatList: FC<ChatListProps> = ({ channelId }) => {
  const userId = getCached.user().id;
  const listRef = useRef<HTMLUListElement>(null);
  const { data: messages } = useList<Message>({ resource: 'messages', meta: { by: 'channelId', id: channelId }, queryOptions: { enabled: !!channelId, refetchInterval: 5000 } });

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <List ref={listRef} sx={{ height: '60vh', overflowY: 'scroll', padding: 1 }}>
      {messages?.data && messages.data.map(message => <ChatListItem isFromMe={userId === message.senderId} message={message.content || ''} />)}
    </List>
  );
};
