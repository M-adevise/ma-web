import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './i18n';

dayjs.extend(relativeTime);

const container = document.getElementById('root');
// eslint-disable-next-line
// biome-ignore lint/style/noNonNullAssertion: <root> is not null
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <React.Suspense>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
