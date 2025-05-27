import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { RecipeFilterBar } from 'features/recipeFilter'
import { RecipeSection } from 'widgets/recipeSection'
import { BREADS, RECIPE_TYPES } from 'shared/constants/recipeTypes'

const RecipesPage = () => {
    // Get recipe type from store
    // TODO: use redux store to get recipe type
    const [recipeType, setRecipeType] = useState('all')

    const renderRecipeSections = () => {
        // switch (recipeType) {
        //     case RECIPE_TYPES.BREADS:
        //         return (
        //             <>
        //             {Object.entries(BREADS).map(([key, value]) => (

        //             ))}
        //                 <RecipeSection label='savory' />
        //                 <RecipeSection label='sweet' />
        //             </>
        //         )
        //     case RECIPE_TYPES.CAKES:
        //         return (
        //             <>
        //                 <RecipeSection label='sweet' />
        //                 <RecipeSection label='savory' />
        //             </>
        //         )
        //     default:
        //         return null
        // }
    }



    return (
        <>
            {/* <RecipeFilterBar />
            {reipceType === constants.recipe.sdldkfk && (
                <RecipeSection label='savory' />
                <RecipeSection label='sweet/>
            )}
            <Outlet /> */}
        </>
    )
}

export default RecipesPage