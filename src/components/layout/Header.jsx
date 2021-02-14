import './header.sass'
import SwitchThemeButton from '../layout/SwitchThemeButton'

function Header() {
    return (
        <>
            <div className="header-content">
                <SwitchThemeButton />
                <h3>Header</h3>
            </div>
        </>
    )
}

export default Header
