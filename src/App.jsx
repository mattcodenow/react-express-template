import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App