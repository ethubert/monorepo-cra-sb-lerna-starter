import React from 'react';
import './App.css';
import { Button } from 'second-app/src/testButton';

function App() {
  return (
    <div className="App">
      <h3 className="test">First app</h3>
      <Button style={{ backgroundColor: 'red' }} label="Imported from second app" />
    </div>
  );
}

export default App;
