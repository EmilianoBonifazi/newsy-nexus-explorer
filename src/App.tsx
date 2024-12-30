import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/index'
import NewsPage from './pages/news'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  )
}

export default App