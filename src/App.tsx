import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Refine } from '@refinedev/core';
import { KBarProvider } from '@refinedev/kbar';
import { RefineSnackbarProvider, useNotificationProvider } from '@refinedev/mui';
import routerProvider, { DocumentTitleHandler, UnsavedChangesNotifier } from '@refinedev/react-router-v6';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute, appResources } from './app';
import { accessControlProvider, dataProvider, authProvider } from './providers';
import { ThemeProvider } from './theme';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <KBarProvider>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              authProvider={authProvider}
              i18nProvider={i18nProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                breadcrumb: false,
                useNewQueryKeys: true,
              }}
              accessControlProvider={accessControlProvider}
              notificationProvider={useNotificationProvider}
              resources={appResources}>
              <AppRoute />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ThemeProvider>
      </KBarProvider>
    </BrowserRouter>
  );
};

export default App;
