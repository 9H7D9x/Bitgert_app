import React from 'react'
import Text from './Text';

const NavAction = (props) => {
    const loginWithRedirect= props.loginWithRedirect;
    const isAuthenticated= props.isAuthenticated;
    const logout= props.logout;

    return (
        <div>
            
            <div className="inline-flex space-x-6 items-center">
            <Text text="Submit a request" color="text-blue-600" />

            {isAuthenticated ? (
            <Text onClick={() => logout({ returnTo: window.location.origin })} text="Log out" color="text-blue-600" />
            ) : (
            <Text onClick={loginWithRedirect} text="Sign in" color="text-blue-600" />
            )}
          </div>
        </div>
    )
}

export default NavAction
