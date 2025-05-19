import React from 'react'
import { Box } from '@mantine/core'
import SidebarLinks, { NavLink } from './SidebarLinks'
import HomeIcon from 'shared/assets/icons/home.svg?react'
import ChefIcon from 'shared/assets/icons/chef-hat.svg?react'
import BarbellIcon from 'shared/assets/icons/barbell.svg?react'

const NAV_LINKS: NavLink[] = [
  { 
    label: 'Home', 
    icon: HomeIcon,
    path: '/' 
  },
  {
    label: 'Fitness', 
    icon: BarbellIcon,
    path: '/fitness',
    subLinks: [
      { label: 'Dashboard', path: '/fitness' },
      { label: 'Exercises', path: '/fitness/exercises' },
      { label: 'Logs', path: '/fitness/logs' },
      { label: 'Progress', path: '/fitness/progress' },
      { label: 'Routines', path: '/fitness/routines' },
    ]
  },
  { 
    label: 'Food', 
    icon: ChefIcon,
    path: '/recipes',
    subLinks: [
      { label: 'Recipes', path: '/recipes/all' },
      { label: 'Log', path: '/recipes/log' },
    ]
  }
]

const SideBar = () => {
  const links = NAV_LINKS.map((link) => <SidebarLinks key={link.label} {...link} />)

  return (
    <Box
      component='nav'
      style={(theme) => ({
        paddingTop: theme.spacing.sm,
        width: 250,
        backgroundColor: theme.colors.secondary[9],
        height: '100vh',
        overflowY: 'auto',
      })}
    >
      {links}
    </Box>
  )
}

export default SideBar