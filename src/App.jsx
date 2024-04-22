import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor]= useState("blue")

  

  return (
    <>
      <div className="w-full h-screen duration-200 px-0 py-0"
       style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> <button  onClick ={() => setColor("Black")}   className="ouline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick ={() => setColor("Red")} className="ouline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick ={() => setColor("Green")} className="ouline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick ={() => setColor("Yellow")} className="ouline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick ={() => setColor("Pink")} className="ouline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
