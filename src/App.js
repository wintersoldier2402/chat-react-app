import React from 'react';

import ChatShell from './containers/shell/ChatShell';
import Navbar from '../src/components/NavBar/navbar'
const App = () => {
  return (
    <div>
    <Navbar />
    <ChatShell />
    </div>
    );
}

export default App;
