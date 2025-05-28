import React, { useState } from 'react'
import { Box, Group, Button, TextInput  } from '@mantine/core'
import { ButtonPill } from 'shared/ui/button'
import SearchIcon from 'shared/assets/icons/search.svg?react'
import classes from './RecipeFilterBar.module.css'
import { RECIPE_TYPES } from 'shared/constants/recipeTypes'

interface RecipeFilterProps {
  onClick: (type: string) => void
}
const RecipeFilterBar = ({ onClick }: RecipeFilterProps) => {
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = () => {
      console.log('Search clicked!')
      setShowSearch(!showSearch)
    }

    return (
      <Box className={classes.filterContainer}>
        <Group className={classes.flexContainer}>
          <Box className={classes.filterButtonGroup}>
            <ButtonPill
              onClick={() => onClick(RECIPE_TYPES.ALL)}
              label='All Recipes'
            />
            <ButtonPill
              onClick={() => onClick(RECIPE_TYPES.BREADS)}
              label='Breads'
            />
            <ButtonPill 
              onClick={() => onClick(RECIPE_TYPES.CAKES)}
              label='Cakes'
            />
            <ButtonPill
              onClick={() => onClick(RECIPE_TYPES.COOKIES)}
              label='Cookies'
            />
            <ButtonPill
              onClick={() => onClick(RECIPE_TYPES.DESSERTS)}
              label='Desserts'
            />
            <ButtonPill
              onClick={() => onClick(RECIPE_TYPES.SAVORY)}
              label='Savory'
            />
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center'}}>
            <Button className={`${classes.searchButtonContainer} ${showSearch ? classes.searchButtonActive : ''}`}  onClick={() => handleSearch()}>
              <SearchIcon
                style={{ stroke: 'var(--mantine-color-primary)', width: 22, height: 22 }}
              />
            </Button>
            {showSearch && <TextInput placeholder='Search Recipes...' />}
          </Box>
        </Group>
      </Box>
    )
}

export default RecipeFilterBar