import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../Pages/Detail'
import Home from '../Pages/Home'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<Detail />}/>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router