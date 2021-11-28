import './App.css';
import React from 'react';
import {UI} from './ui';
import  {AppProvider} from '../context';

function App() {
  return (
   <AppProvider>
     <UI/>
   </AppProvider>
  )
}

export default App;


      


