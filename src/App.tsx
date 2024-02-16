import './styles/index.css';
import React, { useState } from 'react';
import AppRouter from './components/Router.tsx';
import AppHeader from './components/AppHeader.tsx';

function App() {
  const [init] = useState(true);
  return (
    <>
      <AppHeader />
      {init ? (
        <AppRouter />
      ) : (
        'Initializing...'
      )}
      <footer className='absolute bottom-0 left-0 right-0'>
        &copy;
        {new Date().getFullYear()}
        {' '}
        GeoVa
      </footer>
    </>
  );
}

export default App;
