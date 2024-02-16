import React from 'react';
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import MapMain from '../pages/MapMain.tsx';
import NotFound from '../pages/NotFound.tsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapMain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
