import React from 'react'
import AppRouter from 'routes/AppRouter'
import { Providers } from 'app/providers'

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App