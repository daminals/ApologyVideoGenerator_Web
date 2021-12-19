import './App.css';
import React, { useEffect, useState } from 'react';
import MetaHead from './MetaHead';
import Right from './Right';
import Left from './Left';
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
        <Left></Left>
        <Right></Right>
    </div>
  );
}
export default App;