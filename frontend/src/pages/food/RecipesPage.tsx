import React from 'react'
import { Outlet } from 'react-router-dom'

const RecipesPage = () => {
    return (
        <>
        <div>
            <h1>Recipes Nav bar here</h1>
        </div>
        <Outlet />
        </>
    )
}

export default RecipesPage