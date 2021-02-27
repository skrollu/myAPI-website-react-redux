import './header.sass'
import SwitchThemeButton from '../layout/SwitchThemeButton'
import Login from '../login/Login'

function Header() {
    return (
        <>
            <div className="header-content">
                <SwitchThemeButton />
                <h3>Header</h3>
                <Login />
            </div>
        </>
    )
}

export default Header
