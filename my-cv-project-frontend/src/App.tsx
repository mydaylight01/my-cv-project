import type { JSX } from 'react';

import './App.css'

import AppAuthProvier from './providers/providers/AppAuthProvier';
import RouteManager from './layouts/RouteManager';

function App(): JSX.Element {

  return (
    <>
      <AppAuthProvier>
        <RouteManager />
      </AppAuthProvier>
    </>
  )
}

export default App
