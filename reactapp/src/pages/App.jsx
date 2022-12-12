import { useState } from 'react'
import Initial from './Initial/Initail';
import MainInHtml from './main/MainHtml';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Initial/>
      <MainInHtml/>
      <Footer/>
    </div>
  )
}

export default App
