// External Libraries (React first)
import type { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Local Config / Types
import { customTheme } from './theme';

// Providers (Outside to Inside)
import TranslateProvider from './providers/providers/TranslateProvider';
import AppAuthProvier from './providers/providers/AppAuthProvier';
import LoadingProvider from './providers/providers/LoadingProvider';

// Components & Layouts (Outside to Inside)
import RouteManager from './layouts/RouteManager';

// Ant Design
import { ConfigProvider } from 'antd';

// Styles
import './App.css'

function App(): JSX.Element {

  return (
    <AppAuthProvier>
      <TranslateProvider>
        <LoadingProvider>
          <BrowserRouter>
            <ConfigProvider theme={customTheme}>
              <RouteManager />
            </ConfigProvider>
          </BrowserRouter>
        </LoadingProvider>
      </TranslateProvider>
    </AppAuthProvier>
  )
}

export default App
