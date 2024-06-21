import { Card, CardContent, CardHeader, List } from '@mui/material';
import { useList } from '@refinedev/core';
import { Doctor } from '../../providers';
import { ChatContactListItem } from './ChatContactListItem';

const avatar = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
const getDoctorName = ({ firstName, lastName }: Doctor) => `${firstName} ${lastName}`;

export const ChatContactList = () => {
  const { data } = useList<Doctor>({ resource: 'doctors' });

  return (
    <Card>
      <CardHeader title='Répertoire' />
      <CardContent>
        <List sx={{ height: '70vh', overflowY: 'scroll' }}>
          {data && data.data.map(doctor => <ChatContactListItem id={doctor.id || ''} name={getDoctorName(doctor)} avatar={avatar} />)}
        </List>
      </CardContent>
    </Card>
  );
};
