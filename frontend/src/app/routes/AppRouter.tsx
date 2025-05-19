import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AppLayout } from 'app/layout'
import { HomePage} from 'pages/home'
import { 
  FitnessDashboard,
  Exercises,
  FitnessLogs,
  Progress,
  Routines,
 } from 'pages/fitness'
import { RecipesPage, Logs } from 'pages/food'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/fitness' element={<FitnessDashboard />}>
            <Route index path='exercises' element={<Exercises />} />
            <Route path='logs' element={<FitnessLogs />} />
            <Route path='progress' element={<Progress />} />
            <Route path='routines' element={<Routines />} />
          </Route>
          <Route path='/recipes' element={<RecipesPage />}>
            <Route index path='log' element={<Logs />} />
            <Route path=':recipeId' element={<div>Recipe Details</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter