export interface ChatListItemProps {
  message: string;
  isFromMe: boolean;
}

export interface ChatContactListItemProps {
  name: string;
  avatar?: string;
  id: string;
}
