import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/index'
import NewsPage from './pages/news'
import AnalysisPage from './pages/analysis'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
    </Routes>
  )
}

export default App