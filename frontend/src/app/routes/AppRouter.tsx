import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/HomePage'
import RecipesPage from 'pages/recipes/RecipesPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
    </Routes>
  )
}

export default AppRouter