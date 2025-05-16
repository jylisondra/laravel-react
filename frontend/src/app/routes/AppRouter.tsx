import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from 'pages/home/HomePage'
import RecipesPage from 'pages/recipes/RecipesPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter