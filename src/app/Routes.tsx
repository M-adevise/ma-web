import { Box } from '@mui/material';
import { Authenticated, ErrorComponent } from '@refinedev/core';
import { ThemedLayoutV2 } from '@refinedev/mui';
import { CatchAllNavigate, NavigateToResource } from '@refinedev/react-router-v6';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header, Title } from '../components';
import { AuthPage } from '../pages/auth';
import { Radio } from '../pages/radio';
import { DashboardPage } from '../pages/appointements';
import { HistoryList } from '../pages/history';
import { authenticatedContainer } from './styles';
import { Google } from '@mui/icons-material';
import { MessageList } from '../pages/inbox';

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
            <HistoryList>
              <Outlet />
            </HistoryList>
          }></Route>

        <Route path='/appointments' element={<DashboardPage />} />
      </Route>

      <Route
        element={
          <Authenticated key='auth-pages' fallback={<Outlet />}>
            <NavigateToResource resource='inbox' />
          </Authenticated>
        }>
        <Route
          path='/login'
          element={
            <AuthPage
              providers={[
                {
                  name: 'SignIn With Google',
                  icon: <Google width={5} />,
                  label: 'SignIn With Google',
                },
              ]}
              type='login'
            />
          }
        />
        <Route path='/register' element={<AuthPage type='register' />} />
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
