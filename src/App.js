import { useCallback, useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';
import image from './image.jpg';

function App() {
  const [advice, setAdvice]=useState('');
  const header = useRef();

  useEffect(()=>{
    getAdvice();
  },[]);

  const getAdvice = useCallback (async(e)=>{
    const responce = await fetch ('https://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setAdvice(data.activity);
    gsap.from ('h2', {opacity:0, duration:2});
  },[]);

  return (
    <div className='container'>
      <img src={image} alt='foto' className='foto'/>
      <h1>Boredom App</h1>
      <p>If you're bored, try to pressing the button and see what you're prompted to do!</p>
      <div ref={header}>
        <h2 >{advice}</h2>
      </div>
      <button onClick={getAdvice}>Change activity</button>
    </div>
  );
}

export default App;
