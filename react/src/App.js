import './App.css';
import React, { useEffect, useState } from 'react';
import MetaHead from './MetaHead';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://0.0.0.0:8080/api').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div class="app">
        <MetaHead/> 
      <header>
        <div class="split left">
            <h1 class="text-center"> What are you apologizing for?</h1>
        </div>
        <div class="split right">

        </div>
      </header>
    </div>
  );
}
export default App;