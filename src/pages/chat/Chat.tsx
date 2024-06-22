import { Send as SendIcon } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, IconButton, Stack } from '@mui/material';
import { useCreate } from '@refinedev/core';
import { v4 as v4UuidGenerator } from 'uuid';
import { useChatForm } from '../../common/resolver';
import { RHFInput, RefineListView } from '../../components';
import { ChatList } from './ChatList';

export const Chat = () => {
  const chatForm = useChatForm();
  const { mutate } = useCreate();

  const handleSubmit = chatForm.handleSubmit(data => {
    mutate({
      resource: 'messages',
      values: { ...data, id: v4UuidGenerator() },
    });
  });

  return (
    <RefineListView>
      <Card>
        <CardHeader title='John doe' />
        <CardContent>
          <ChatList />
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
        </CardContent>
      </Card>
    </RefineListView>
  );
};
