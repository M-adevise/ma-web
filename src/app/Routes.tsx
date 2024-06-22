import { Box } from '@mui/material';
import { Authenticated, ErrorComponent } from '@refinedev/core';
import { ThemedLayoutV2 } from '@refinedev/mui';
import { CatchAllNavigate, NavigateToResource } from '@refinedev/react-router-v6';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header, Title } from '../components';
import { CalendarPage } from '../pages/appointements';
import { AssistancePage } from '../pages/assistance';
import { AuthPage } from '../pages/auth/AuthPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { CallPage } from '../pages/call';
import { Chat, ChatContactList } from '../pages/chat';
import { MessageList } from '../pages/inbox';
import { PatientList } from '../pages/patients';
import { ProfilePage } from '../pages/profile';
import { authenticatedContainer } from './styles';

export const AppRoute = () => {
  return (
    <Routes>
      <Route
        element={
          <Authenticated key='authenticated-routes' fallback={<CatchAllNavigate to='/login' />}>
            <ThemedLayoutV2 Header={Header} Title={Title}>
              <Box sx={authenticatedContainer}>
                <Outlet />
              </Box>
            </ThemedLayoutV2>
          </Authenticated>
        }>
        <Route index element={<MessageList />} />
        <Route
          path='/patients'
          element={
            <PatientList>
              <Outlet />
            </PatientList>
          }></Route>

        <Route path='/chat' element={<ChatContactList />} />
        <Route path='/chat/:contactId' element={<Chat />} />
        <Route path='/appointments' element={<CalendarPage />} />
        <Route path='/assistance' element={<AssistancePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/call/:roomId' element={<CallPage />} />
      </Route>

      <Route
        element={
          <Authenticated key='auth-pages' fallback={<Outlet />}>
            <NavigateToResource resource='inbox' />
          </Authenticated>
        }>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<AuthPage />} />
      </Route>

      <Route
        element={
          <Authenticated key='catch-all'>
            <ThemedLayoutV2 Header={Header} Title={Title}>
              <Outlet />
            </ThemedLayoutV2>
          </Authenticated>
        }>
        <Route path='*' element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
};
