import { useState } from 'react';
import './App.css'

function App() {

  let [color, setColor]=useState("#444");

  return (
    <>
      <div className='w-full h-screen relative' style={{backgroundColor:color}}>
        <div className='flex p-3 rounded-md bg-slate-300 absolute bottom-20 left-20'>
          <button className='bg-blue-800 border-2 border-solid border-black w-16 h-7 rounded-xl mr-2' onClick={() => {setColor("blue")}} title='blue'></button>
          <button className='bg-red-800 border-2 border-solid border-black w-16 h-7 rounded-xl mr-2' onClick={() => {setColor("red")}} title='red '></button>
          <button className='bg-green-800 border-2 border-solid border-black w-16 h-7 rounded-xl mr-2' onClick={() => {setColor("green")}} title='green'></button>
          <button className='bg-yellow-800 border-2 border-solid border-black w-16 h-7 rounded-xl' onClick={() => {setColor("yellow")}} title='yellow'></button>
        </div>
      </div>
    </>
  )
} 

export default App
