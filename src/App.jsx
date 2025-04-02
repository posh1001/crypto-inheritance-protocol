import React, { useState } from 'react'
import { BrowserRouter as GrandParent,
Routes as Parent, 
Route as Child  } from 'react-router-dom';
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';
import GetStarted from './Pages/GetStarted';
import Login from './Pages/Login';
import ConnectWallet from './Pages/Connect-Wallet';
import SelectPlan from './Pages/SelectPlan';
import Dashboard from './Pages/Dashboard';
import DashBoardWallet from './Pages/DashBoardWallet';
import SelectAsset from './Pages/SelectAsset';
import Beneficiaries from './Pages/Beneficiaries';


function App() {

  return (
    <>
      <GrandParent>
        <Parent>
        <Child path='/' element={<Home/>}/>
        <Child path='/signup' element={<SignUp/>}/>
        <Child path='/get-started' element={<GetStarted/>}/>
        <Child path='/login' element={<Login/>}/>
        <Child path='/connect-wallet' element={<ConnectWallet/>}/>
        <Child path='/select-plan' element={<SelectPlan/>}/>
        <Child path='/dashboard' element={<Dashboard/>}/>
        <Child path='/dashboard-wallet' element={<DashBoardWallet/>}/>
        <Child path='/select-asset' element={<SelectAsset/>}/>
        <Child path='/beneficiaries' element={<Beneficiaries/>}/>
        </Parent>
      </GrandParent>
    </>
  )
}

export default App
