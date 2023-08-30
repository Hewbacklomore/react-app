import React from 'react';
import Definitions from './components/Definitions';

function App() {

  const definitionsList = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];
  return (
    <div className='App'>
      <Definitions data={definitionsList} />
    </div>
  );
}

export default App;