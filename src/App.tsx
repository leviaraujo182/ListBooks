import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'

function App() {

  const [data, setData] = useState([])
  const [text, setText] = useState('')

  function getData (){
    alert("Hello World")
  }

  return (
    <div className="App">
      <div className="content">
        <div className="header">
            <Text title="<Titulo da sua escolha>" />
              <div className="search">
                <Input />
                <Button onclick={getData}/>
            </div>
          </div>
          <div className="mid_content">
            <List />
          </div>
      </div>
    </div>
  );
}

export default App;
