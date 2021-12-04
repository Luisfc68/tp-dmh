import { colors } from 'quasar'
const editableColors = [
    'primary',
    'secondary',
    'accent',
    'dark',
    'positive',
    'negative',
    'info',
    'warning',
    'fondo',
    'dark-secondary'
]

const defaultTheme = {
    title: 'Default',
    colors: editableColors.map(color => colors.getPaletteColor(color)),
}

export default{
    editableColors,
    themes: [
        defaultTheme
    ],
    actualTheme: defaultTheme
}