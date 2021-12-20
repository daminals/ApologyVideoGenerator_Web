import './App.css';
import React, { useEffect, useState } from 'react';
import MetaHead from './MetaHead';
import Right from './Right';
import Left from './Left';
import axios from 'axios'

function App() {
  const [mainLink, setLink] = useState({})

  function handleSetLink(Varlink){
    setLink(Varlink);
  }

  return (
    <div class="app">
        <MetaHead/> 
        <Left setLink={handleSetLink}></Left>
        <Right link="link"></Right>
    </div>
  );
}
export default App;