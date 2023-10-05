import { useState } from 'react'
import './style.css'
import Header from './Header'
import Meme from './Meme'
import dados from './memeData'
function App() { 
  console.log(dados)
  return (
    <div>
       <Header />
       <Meme />
    </div>
  )
}

export default App
