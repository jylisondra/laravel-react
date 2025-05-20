import { createTheme, MantineColorsTuple, CSSVariablesResolver } from '@mantine/core'

const primary: MantineColorsTuple = [
    "#f9f1f1",
    "#eae0e0",
    "#d7bebe",
    "#c59999",
    "#b67a79",
    "#ae6665",
    "#aa5b5a",
    "#964c4b",
    "#864242",
    "#452020"
]

const secondary: MantineColorsTuple = [
    "#fcf2f2",
    "#e9e5e5",
    "#cecaca",
    "#b3adad",
    "#9d9494",
    "#8f8484",
    "#8a7c7c",
    "#786969",
    "#6e5e5e",
    "#624e4e"
]

const background: MantineColorsTuple = [
    "#fff2f2",
    "#ebe5e5",
    "#dbd8d8",
    "#b3afaf",
    "#9b9797",
    "#8d8888",
    "#888080",
    "#766d6d",
    "#6b6060",
    "#615151"
]

const card: MantineColorsTuple = [
    "#fbf3f5",
    "#e8e8e8",
    "#cdcdcd",
    "#b2b2b2",
    "#9a9a9a",
    "#8b8b8b",
    "#848484",
    "#717171",
    "#656565",
    "#5c5557"
]

const textDark: MantineColorsTuple = [
    "#f5f5f5",
    "#e7e7e7",
    "#cccccc",
    "#b1b1b1",
    "#999999",
    "#8a8a8a",
    "#828282",
    "#707070",
    "#636363",
    "#252323"
]

const textLight: MantineColorsTuple = [
    "#fef4ea",
    "#f0e7de",
    "#e5dacf",
    "#c8b29c",
    "#b79b7f",
    "#ac8c6c",
    "#a88461",
    "#937150",
    "#846445",
    "#745636"
]


const accentRed: MantineColorsTuple = [
    "#ffecec",
    "#f9d9d9",
    "#eab1b1",
    "#dd8787",
    "#d26362",
    "#cb4c4b",
    "#c94040",
    "#b23131",
    "#9f292b",
    "#8c1f23"
]

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-color-primary': theme.colors.primary[9],
        '--mantine-color-secondary': theme.colors.secondary[9],
        '--mantine-color-white': '#F3F3F3',
        '--mantine-color-black': '#252323',
        '--mantine-color-text-light': theme.colors.textLight[2],
        '--mantine-color-card': theme.colors.card[1],
        '--mantine-color-pill': '#8f787863',
        '--mantine-dropshadow-card': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '--mantine-font-size-sm': '0.875rem',
        '--mantine-font-size-md': '1rem',
        '--mantine-font-size-lg': '1.125rem',
        '--mantine-font-size-xl': '1.25rem',
        '--mantine-radius-default': '6px',
    },
    light: {
    },
    dark: {
    },
})

export const theme = createTheme({
    colors: {
        primary,
        secondary,
        accentRed,
        background,
        card,
        textDark,
        textLight,
    },
    spacing: {
        xs: '0.5rem',
        sm: '1rem',    
        md: '1.5rem',  
        lg: '2rem',    
        xl: '3rem',    
        },
    defaultRadius: 6,
})

export type ThemeType = typeof theme