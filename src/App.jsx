// App.jsx

import React, { useState } from 'react';
import Sidebar from './components/Sidebar'; // Make sure to import Sidebar
import Lefthero from './components/Lefthero'; // Make sure to import Lefthero

function App() {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide((prev) => !prev);
  };

  return (
    <div className='flex  sm:flex-row'>
      <Sidebar hide={hide} />
      <Lefthero handleClick={handleClick} />
    </div>
  );
}

export default App;
