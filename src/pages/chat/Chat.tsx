import { Send as SendIcon } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, IconButton, Stack, TextField } from '@mui/material';
import { RefineListView } from '../../components';
import { ChatList } from './ChatList';

export const Chat = () => {
  return (
    <RefineListView>
      <Card>
        <CardHeader title='John doe' />
        <CardContent>
          <ChatList />
          <form>
            <Stack mt={2} direction='row' width='100%'>
              <TextField fullWidth size='small' sx={{ mr: 1 }} />
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
