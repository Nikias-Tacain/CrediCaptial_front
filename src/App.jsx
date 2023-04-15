import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/page'
import Register from './pages/register/page'
import Login from './pages/login/page'
import { Navigate } from 'react-router-dom'
import './layout/Header.module.css';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='register' />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
