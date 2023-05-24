import React from 'react'
import { ReactComponent as Background } from '../src/login.svg';



const App = () => {
  return (
    <div className="w-screen h-screen">
    <Background className="absolute w-full h-full" />
    {/* Rest of your component's content */}
  </div>
  )
}

export default App