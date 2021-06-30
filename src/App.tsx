import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'
import api from './api/api'

function App() {

  const [data, setData] = useState([])
  const [text, setText] = useState('')

  async function getData (){

   await api.get(text).then((data)=> {
      setData(data.data.hits)
   }).catch((err)=>{
     console.log("Não foi possivel fazer a requisição pelo erro" + err)
   })

   console.log(data)   
  
  }

  return (
    <div className="App">
      <div className="content">
        <div className="header">
            <Text title="<Titulo da sua escolha>" />
              <div className="search">
                <Input setText={setText} />
                <Button onclick={getData}/>
            </div>
          </div>
          <div className="mid_content">
            {data.length > 0 ? 
              data.map((response:any, key: number)=> (
                <List author={response.author} title={response.title} url={response.url} key={key} />
            )) : <Text title="Nenhum registro encontrado" />}

          </div>
      </div>
    </div>
  );
}

export default App;
