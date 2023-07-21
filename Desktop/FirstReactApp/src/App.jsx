import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Label1 from './components/Lable1'
import About from './components/about'
import Services from './components/services'
import ContactForm from './components/contact'
import Count from './components/counter'
import './App.css'



function App() {
  console.log('hello from main page');
  function show(){
    document.querySelector('.mainImg').style.display = "block";
  }
  function hide(){
    document.querySelector('.mainImg').style.display = "none";
  }
  return (
    <div>
      <p className='main' onClick={show}>
      This is calling from main page<br/>
      Click me to see the dog :)
      <img onClick={hide} className='mainImg' src='src/assets/dog.png' width="200px" height="200px"/>
      </p>
        <Label1/>
        <Count/>
        <hr/>
        <About/>
        <Services/>
        <ContactForm/>

    </div>  
    
  )
  
}

export default App
