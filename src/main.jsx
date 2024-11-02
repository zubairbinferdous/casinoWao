/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AllCasino from './pages/AllCasino.jsx'
import Anonymous from './pages/Anonymous.jsx'
import BetReview from './pages/BetReview.jsx'
import Bets from './pages/Bets.jsx'
import Bitkin from './pages/Bitkin.jsx'
import Btf from './pages/Btf.jsx'
import Casi from './pages/Casi.jsx'
import Casinos from './pages/Casinos.jsx'
import Fortune from './pages/Fortune.jsx'
import Gosol from './pages/Gosol.jsx'
import Immer from './pages/Immer.jsx'
import King from './pages/King.jsx'
import LdReview from './pages/LdReview.jsx'
import Lib from './pages/Lib.jsx'
import Lucky from './pages/Lucky.jsx'
import LvCasino from './pages/LvCasino.jsx'
import Nomini from './pages/Nomini.jsx'
import Roob from './pages/Roob.jsx'
import Set from './pages/Set.jsx'
import Slo from './pages/Slo.jsx'
import Spi from './pages/Spi.jsx'
import Swi from './pages/Swi.jsx'
import Thun from './pages/Thun.jsx'
import Top from './pages/Top.jsx'
import Waza from './pages/Waza.jsx'
import Wid from './pages/Wid.jsx'
import Yetbet from './pages/Yetbet.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/allCasino',
    element:<AllCasino></AllCasino>
  },
  {
    path:'/Casinos',
    element:<Casinos></Casinos>
  },

  {
    path:'/Crypto-casino',
    element:<Anonymous></Anonymous>
  },

  {
    path:'/Top',
    element:<Top></Top>
  },




  // review page
  {
    path:'/BetReview',
    element:<BetReview></BetReview>
  },
  {
    path:'/lvCasino',
    element:<LvCasino></LvCasino>
  },
  {
    path:'/luckyCasino',
    element:<Lucky></Lucky>
  },
  {
    path:'/luckyDream',
    element:<LdReview></LdReview>
  },
  {
    path:'/wazaCasino',
    element:<Waza></Waza>
  },
  {
    path:'/nomini',
    element:<Nomini></Nomini>
  },
 
  {
    path:'/roob',
    element:<Roob></Roob>
  },

  {
    path:'/bitkit',
    element:<Bitkin></Bitkin>
  },
  {
    path:'/goSot',
    element:<Gosol></Gosol>
  },
  {
    path:'/ybet',
    element:<Yetbet></Yetbet>
  },
  {
    path:'/sat',
    element:<Set></Set>
  },
  {
    path:'/slo',
    element:<Slo></Slo>
  },
  {
    path:'/forTune',
    element:<Fortune></Fortune>
  },
  {
    path:'/bitf',
    element:<Btf></Btf>
  },
  {
    path:'/immer',
    element:<Immer></Immer>
  },
  {
    path:'/swi',
    element:<Swi></Swi>
  },
  {
    path:'/Bets',
    element:<Bets></Bets>
  },
 
  {
    path:'/thun',
    element:<Thun></Thun>
  },
  {
    path:'/wid',
    element:<Wid></Wid>
  },
  {
    path:'/casi',
    element:<Casi></Casi>
  },
  {
    path:'/spi',
    element:<Spi></Spi>
  },
  {
    path:'/lib',
    element:<Lib></Lib>
  },
  {
    path:'/king',
    element:<King></King>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
