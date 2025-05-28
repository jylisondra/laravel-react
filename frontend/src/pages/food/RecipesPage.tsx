import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RecipeFilterBar } from 'features/recipeFilter'
import { RecipeSection } from 'widgets/recipeSection'
import { 
    BREADS, 
    CAKES,
    COOKIES,
    DESSERTS,
    SAVORY,
    RECIPE_TYPES 
} from 'shared/constants/recipeTypes'

const RecipesPage = () => {
    const navigate = useNavigate()
    // Get recipe type from store
    // TODO: use redux store to get recipe type
    const [recipeType, setRecipeType] = useState('all')

    const handleFilterClick = (type: string) => {
        setRecipeType(type)
        // Navigate to the corresponding recipe type page
        if (type === 'all') {
            navigate('/recipes')
        } else {
            navigate(`/recipes/${type}`)
        }
    }

    const renderRecipeSections = () => {
        switch (recipeType) {
            case RECIPE_TYPES.BREADS:
                return (
                    <>
                        {Object.entries(BREADS).map(([key, value]) => (
                            <RecipeSection key={key} label={value} />
                        ))}
                    </>
                )
            case RECIPE_TYPES.CAKES:
                return (
                    <>
                        {Object.entries(CAKES).map(([key, value]) => (
                            <RecipeSection key={key} label={value} />
                        ))}
                    </>
                )
            case RECIPE_TYPES.COOKIES:
                return (
                    <>
                        {Object.entries(COOKIES).map(([key, value]) => (
                            <RecipeSection key={key} label={value} />
                        ))}
                    </>
                )
            case RECIPE_TYPES.DESSERTS:
                return (
                    <>
                        {Object.entries(DESSERTS).map(([key, value]) => (
                            <RecipeSection key={key} label={value} />
                        ))}
                    </>
                )
            case RECIPE_TYPES.SAVORY:
                return (
                    <>
                        {Object.entries(SAVORY).map(([key, value]) => (
                            <RecipeSection key={key} label={value} />
                        ))}
                    </>
                )
            default:
                return  <RecipeSection key={'all'} label={'all'} />
        }
    }



    return (
        <>
            <RecipeFilterBar onClick={handleFilterClick} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.8rem', padding: '2rem' }}>
                {renderRecipeSections()}
            </div>
            <Outlet />
        </>
    )
}

export default RecipesPage