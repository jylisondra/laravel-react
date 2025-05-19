import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/sidebar'

const AppLayout = () => {
  return (
    <AppShell
     styles={(theme) => ({
        navbar: {
          width: 300, // Set the width of the navbar
          backgroundColor: theme.colors.primary[1], // Optional: Set background color
        },
        main: {
          backgroundColor: theme.colors.gray[0], // Optional: Set background color for main content
        }
        })}
    >
      <AppShell.Header p='md'>Header</AppShell.Header>
      <AppShell.Navbar p='md'>Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout