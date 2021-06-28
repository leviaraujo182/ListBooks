import React from 'react';
import './App.css';

import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="header">
            <Text title="<Titulo da sua escolha>" />
              <div className="search">
                <Input />
                <Button />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
