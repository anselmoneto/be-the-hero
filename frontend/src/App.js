//import React, { useState } from 'react';
// import Header from './Header';
import React from 'react';
//import Logon from './pages/Logon';
import Routes from './routes';
import './global.css';
//import { Route } from 'react-router-dom';

function App() {
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  return (
    // <Header title="Be The Hero" />
    // <Header>
    //   Be The Hero
    // </Header>
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    // <Logon />
    <Routes />
  );
}

export default App;
