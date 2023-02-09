import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenido!" />
      
  </>;
};

export default App
