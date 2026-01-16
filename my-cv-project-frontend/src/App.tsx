import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppAuthProvier from './providers/providers/AppAuthProvier';

import RouteManager from './layouts/RouteManager';

import { ConfigProvider } from 'antd';
import { customTheme } from './theme';

import './App.css'

function App(): JSX.Element {

  return (
    // <TranslateProvider>
    <AppAuthProvier>
      <BrowserRouter>
        <ConfigProvider theme={customTheme}>
          <RouteManager />
        </ConfigProvider>
      </BrowserRouter>
    </AppAuthProvier>
    // </TranslateProvider>
  )
}

export default App
