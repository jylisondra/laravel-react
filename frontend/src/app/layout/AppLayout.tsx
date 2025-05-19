import React from 'react'
import { Box } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/sidebar'
import { Header } from 'widgets/header'

const AppLayout = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box style={{ display: 'flex', flex: 1, height: '100vh', overflow: 'hidden' }}>
        <Sidebar />
        <Box component='main' p='md' style={{ flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default AppLayout