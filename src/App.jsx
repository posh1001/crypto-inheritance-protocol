import React, { useState } from 'react'
import { BrowserRouter as GrandParent,
Routes as Parent, 
Route as Child  } from 'react-router-dom';
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';
import GetStarted from './Pages/GetStarted';

function App() {

  return (
    <>
      <GrandParent>
        <Parent>
        <Child path='/' element={<Home/>}/>
        <Child path='/signup' element={<SignUp/>}/>
        <Child path='/get-started' element={<GetStarted/>}/>
        </Parent>
      </GrandParent>
    </>
  )
}

export default App
