import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                 <Link
                    className='navbarItem'
                    to="/"
                >
                    <p className='navbarText'>
                        Home
                    </p>
                </Link>
                <div className='authorizationButtons'>
                <Link
                    className='navbarItem'
                    to="/signUp"
                >
                    <p className='navbarText'>
                        Sign up
                    </p>
                </Link>
                <Link
                    className='navbarItem'
                    to="/signIn"
                >
                    <p className='navbarText'>
                        Singn in
                    </p>
                </Link>
                </div>
            </nav>
        )
    }
}
export default Navbar