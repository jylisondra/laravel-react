import { createTheme, MantineColorsTuple  } from '@mantine/core'

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
    "#fff0f0",
    "#f0e4e4",
    "#d5c8c8",
    "#baabab",
    "#a39292",
    "#998686",
    "#907979",
    "#7e6767",
    "#725a5b",
    "#674c4c"
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

const text: MantineColorsTuple = [
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

export const theme = createTheme({
    colors: {
        primary,
        secondary,
        accentRed,
        background,
        card,
        text,
    },
    defaultRadius: 6,
})

export type ThemeType = typeof theme