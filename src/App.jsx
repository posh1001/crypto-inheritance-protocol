import React, { useState } from 'react'
import { BrowserRouter as GrandParent,
Routes as Parent, 
Route as Child  } from 'react-router-dom';
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';

function App() {

  return (
    <>
      <GrandParent>
        <Parent>
        <Child path='/' element={<Home/>}/>
        <Child path='/signup' element={<SignUp/>}/>
        </Parent>
      </GrandParent>
    </>
  )
}

export default App
