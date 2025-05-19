import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { theme, resolver } from 'app/theme'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme} cssVariablesResolver={resolver}>
        {children}
      </MantineProvider>
    </Provider>
  )
}

export default Providers
