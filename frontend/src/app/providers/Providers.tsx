import React from 'react'
import { createTheme, MantineProvider, DEFAULT_THEME } from '@mantine/core'
import { theme } from 'app/theme/theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default Providers
