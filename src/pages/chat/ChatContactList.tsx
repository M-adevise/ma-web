import { Card, CardContent, CardHeader, List } from '@mui/material';
import { ChatContactListItem } from './ChatContactListItem';

const avatar = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';

export const ChatContactList = () => {
  return (
    <Card>
      <CardHeader title='Répertoire' />
      <CardContent>
        <List sx={{ height: '70vh', overflowY: 'scroll' }}>
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
          <ChatContactListItem id='la;kjf' name='Dokotera Valy' avatar={avatar} />
        </List>
      </CardContent>
    </Card>
  );
};
