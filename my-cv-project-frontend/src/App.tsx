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
import RouteManager from './layout/RouteManager';

// Ant Design
import { ConfigProvider } from 'antd';

// Toast
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import './App.css'

function App(): JSX.Element {

  return (
    <LoadingProvider>
      <AppAuthProvier>
        <TranslateProvider>
          <BrowserRouter>
            <ConfigProvider theme={customTheme}>
              <RouteManager />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                limit={3}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </ConfigProvider>
          </BrowserRouter>
        </TranslateProvider>
      </AppAuthProvier>
    </LoadingProvider>
  )
}

export default App
