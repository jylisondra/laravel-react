import React from 'react'
import { useMantineTheme } from '@mantine/core'

const HomePage = () => {
    const theme = useMantineTheme()
    return (
        <div style={{ color: theme.colors.primary[9] }}>Home Page!</div>
    )
}

export default HomePage