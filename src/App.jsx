import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
      </Routes>

    </>
  )
}

export default App