import React from 'react'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg?react'
import { Box, UnstyledButton, useMantineTheme } from '@mantine/core'
import classes from './RecipeSection.module.css'

interface RecipeSectionProps {
  label: string;
}

const RecipeSection = ({
  label
}: RecipeSectionProps) => {
  const theme = useMantineTheme()

  return (
    <Box className={classes.sectionContainer}>
      <UnstyledButton className={classes.sectionButton}>
        {label}
        <IconChevronRight style={{ stroke:theme.colors.textDark[9] }} />
      </UnstyledButton>
    </Box>
  )
}

export default RecipeSection