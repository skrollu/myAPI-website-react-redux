import React from 'react'

export const THEMES = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext({
    theme: THEMES.dark,
    toggleTheme: () => { }
})

export default ThemeContext;