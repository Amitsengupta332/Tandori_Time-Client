 import React from 'react';
import Navigation from './pages/Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
 
 const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet/>
    </div>
  );
 };
 
 export default App;