import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Box from './myComponents/Box'
import axios from 'axios'

function App() {
  const [scannedProducts, setScannedProducts] = useState([]);

  return (
    <div className='bg-black'>
      <div >
        <Box></Box>
      </div>
    </div>
  )
}

export default App
