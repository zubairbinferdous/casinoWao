/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AllCasino from './pages/AllCasino.jsx'
import BetReview from './pages/BetReview.jsx'
import LdReview from './pages/LdReview.jsx'
import Lucky from './pages/Lucky.jsx'
import LvCasino from './pages/LvCasino.jsx'


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
    element:<LdReview></LdReview>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
