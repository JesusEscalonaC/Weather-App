import { useEffect, useState } from 'react'
import './App.css'
import Climate from './Climate'
function App() {
  const[visible, setVisible]= useState(false)
  return (
    <div className="App">
     
     <Climate visible={visible} setVisible={setVisible}/>
     <div className={visible ?"hidden" : 'loader'}></div>
      
    </div>
  )
}

export default App
