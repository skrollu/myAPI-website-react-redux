import React from 'react'
import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'

function SwitchThemeButton() {
    const themeProviderValue = useContext(ThemeContext)

    return (
        <div>
            <button onClick={themeProviderValue.toggleTheme} style={ themeProviderValue.theme }>Changer de Theme</button>
        </div>
    )
}

export default SwitchThemeButton
