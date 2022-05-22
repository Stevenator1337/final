import React from 'react'
import LinkContainer from './components/LinkContainer'
import './App.css';

const body = document.querySelector('body');
const changer = document.querySelector('section');
  let color = '#';
 body.addEventListener('click',() => {
 
  color += Math.random().toString(16).slice(2,8);
changer.style.backgroundColor = color;
color = "#";
 })
 
  function App() {
  return (
    
    <div className="App">
      
      <LinkContainer />
     
      <section>
   <button >Click Me</button>

  </section>

        
         
      

  
    </div>
    
  )
}
 


export default App
