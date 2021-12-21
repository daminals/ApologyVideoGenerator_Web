import './App.css';
import React, { useEffect, useState } from 'react';
import MetaHead from './MetaHead';
import Right from './Right';
import Left from './Left';

const LOCAL_STORAGE_KEY = 'apologyVideos'

function App() {
  const [mainLink, setLink] = useState("/broke");

  function handleSetLink(Varlink){
    setLink(Varlink);
    console.log(mainLink)
  }

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // access from local memory
    if (storedVideos) setLink(storedVideos)
  }, []) // will only call once bc it is called whenever array changes, [] never changes. Only called on load

  useEffect(() => { // save to local storage so when refresh no disappear
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mainLink))
  }, [mainLink])

  return (
    <div class="app">
        <MetaHead/> 
        <Left setLink={handleSetLink}></Left>
        <Right link={mainLink}></Right>
    </div>
  );
}
export default App;