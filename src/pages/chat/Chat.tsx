import { Send as SendIcon } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, IconButton, Stack } from '@mui/material';
import { useCreate } from '@refinedev/core';
import { FormProvider } from 'react-hook-form';
import { v4 as v4UuidGenerator } from 'uuid';
import { useChatForm } from '../../common/resolver';
import { RHFInput, RefineListView } from '../../components';
import { ChatList } from './ChatList';
import { useGetChannel } from './use-get-channel';

export const Chat = () => {
  const channel = useGetChannel();
  const chatForm = useChatForm();
  const { mutate } = useCreate();

  const handleSubmit = chatForm.handleSubmit(data => {
    if (channel) {
      const messageId = v4UuidGenerator();
      mutate({
        resource: 'messages',
        values: { ...data, id: messageId },
        meta: { id: messageId, channelId: channel.id },
      });
      chatForm.setValue('content', '');
    }
  });

  return (
    <RefineListView>
      <Card>
        <CardHeader title='John doe' />
        <CardContent>
          <ChatList />
          <FormProvider {...chatForm}>
            <form onSubmit={handleSubmit}>
              <Stack mt={2} direction='row' width='100%'>
                <RHFInput name='content' fullWidth size='small' sx={{ mr: 1 }} />
                <Box>
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </Box>
              </Stack>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </RefineListView>
  );
};
