import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  function resetColor(){
    if(setColor != "black"){
      setColor("black")
    }
  }
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <h1 className='text-center text-3xl font-mono pt-20 text-white md:text-4xl'>Click on the buttons to change the Background color</h1>
        <div className='fixed flex flex-wrap justify-center top-55 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>Red</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>Green</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>Blue</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'grey' }} onClick={() => setColor("grey")}>Grey</button>
            <button className='outline-non px-4 py-1 rounded-full text-pink-800 shadow-lg' style={{ backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'purple' }} onClick={() => setColor("purple")}>Purple</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'olive' }} onClick={() => setColor("olive")}>Olive</button>
            <button className='outline-non px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'teal' }} onClick={() => setColor("teal")}>Teal</button>
          </div>
        </div>
        <div className='fixed flex justify-center bottom-35 left-0 right-0'>
          <button className='bg-amber-200 px-3 py-2 rounded-full font-medium' onClick={()=> resetColor()}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
