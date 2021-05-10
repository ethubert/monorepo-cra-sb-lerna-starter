import React from 'react';
import './App.css';
import { Button } from 'second-app/src/testButton';
import { InputEmail } from 'storybook/src/core/InputEmail';

function App() {
  return (
    <div className="App">
      <h3 className="test">First app</h3>
      <Button style={{ backgroundColor: '#9cc2ff' }} label="Imported from second app" />
      <InputEmail bgColor="#9cc2ff" />
    </div>
  );
}

export default App;
