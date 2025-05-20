import React from 'react'
import { Outlet } from 'react-router-dom'
import { RecipeFilterBar } from 'features/recipeFilter'

const RecipesPage = () => {
    return (
        <>
            <RecipeFilterBar />
            <Outlet />
        </>
    )
}

export default RecipesPage