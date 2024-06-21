import { List } from '@mui/material';
import { useEffect, useRef } from 'react';
import { ChatListItem } from './ChatListItem';

export const ChatList = () => {
  const listRef = useRef<HTMLUListElement>(null);

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
      <ChatListItem
        isFromMe
        message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum qui dolorum voluptates dolores nemo ad dolor debitis sed deleniti repellat, magnam ipsa dolorem, ex doloribus reiciendis. Temporibus non aut obcaecati!'
      />
      <ChatListItem isFromMe message='This is my message to you.' />
      <ChatListItem isFromMe={false} message='This is my message to you.' />
      <ChatListItem isFromMe message='This is my message to you.' />
      <ChatListItem isFromMe={false} message='This is my message to you.' />
      <ChatListItem isFromMe message='This is my message to you.' />
      <ChatListItem isFromMe={false} message='This is my message to you.' />
      <ChatListItem isFromMe message='This is my message to you.' />
      <ChatListItem isFromMe={false} message='This is my message to you.' />
    </List>
  );
};
