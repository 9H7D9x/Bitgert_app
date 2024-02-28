import React from 'react'
import Logo from '../base/Logo';
import NavAction from '../base/NavAction';

const Header = (props) => {
    const isAuthenticated = props.isAuthenticated;
    const logout = props.logout;
    const loginWithRedirect = props.loginWithRedirect;

    return (
    <div className="h-full w-full relative">
      <div className="relative w-full h-auto inline-flex shadow-sm">
        <div className="h-auto bg-white w-full inline-flex justify-between px-[8rem] py-6">
          <Logo src="https://theme.zdassets.com/theme_assets/12468255/55cd6aeb8be0083a1eeb14f996cad05ab5bb807c.png" className="h-10 w-auto" />
          <NavAction isAuthenticated={isAuthenticated} logout={logout} loginWithRedirect={loginWithRedirect} />
        </div>
      </div>
    </div>
    )
}

export default Header
