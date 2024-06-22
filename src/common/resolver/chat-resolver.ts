import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import z from 'zod';
import { getCached } from '../../utils';

const chatEValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  content: z.string(),
  attachment: z.string(),
});

const chatResolver = zodResolver(chatEValidator);
type chatFormType = z.infer<typeof chatEValidator>;

export const useChatForm = () => {
  const { contactId } = useParams();
  const { id: userId } = getCached.user();
  const defaultChatValue = {
    id: 'id',
    senderId: userId,
    receiverId: contactId,
    content: '',
    attachment: '',
  };
  return useForm<chatFormType>({
    defaultValues: defaultChatValue,
    mode: 'onSubmit',
    resolver: chatResolver,
  });
};
