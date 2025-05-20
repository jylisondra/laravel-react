import React, { useState } from 'react'
import { Box, Group, Button, TextInput  } from '@mantine/core'
import { ButtonPill } from 'shared/ui/button'
import SearchIcon from 'shared/assets/icons/search.svg?react'
import classes from './RecipeFilterBar.module.css'

const RecipeFilterBar = () => {
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
              onClick={() => {}}
              label='All Recipes'
            />
            <ButtonPill
              onClick={() => {}}
              label='Breads'
            />
            <ButtonPill 
              onClick={() => {}}
              label='Cakes'
            />
            <ButtonPill
              onClick={() => {}}
              label='Cookies'
            />
            <ButtonPill
              onClick={() => {}}
              label='Desserts'
            />
            <ButtonPill
              onClick={() => {}}
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