import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaBars, FaRegTimesCircle} from 'react-icons/fa'
import {useHttp, useMessage} from '../hooks/index'
import {AuthContext} from '../context/AuthContext'
import '../styles/navbarStyles/navbar.scss'

function Header() {
  const [menuClicked, setmenuClicked] = useState(false);
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const navigate = useNavigate()
  const message = useMessage()

  const logoutHandler = async () => {
    try {
      const data = await request('/auth/logout', 'POST')
      message(data.message) 
      auth.logout()
      navigate('/login')
      } catch(e) {
    }
  }

  //Burger menu clicked or no
  const toggleMenuClicked = () => {
      setmenuClicked(!menuClicked);
  }
 
  return (
    <nav className = "navbar">
        <Link
            to="/?"
            className = 'logo'>
            <img 
                src={require("../images/logo.jpg")} 
                alt = "logo image" 
                className = "logoImage"
            />
        </Link>
        <div 
            className = {
                menuClicked ? "navbarList navbarList--active" : "navbarList" 
            }
        >
            <Link 
                className = 'navbarItem'
                to="/?category=armenianFoods"
            >
                <p className = 'navbarText'>
                    Armenian foods
                </p>
            </Link>
            <Link 
                className = 'navbarItem'
                to="/?category=dishes"
            >
                <p className = 'navbarText'>
                    Dishes
                </p>
            </Link>
            <Link 
                  className = 'navbarItem'
                  to="/?category=cakes"
            >
                <p className = 'navbarText'>
                        Cakes
                </p>
            </Link>
            <Link 
                  className = 'navbarItem'
                  to="/?category=cookies"
            >
                <p className = 'navbarText'>
                    Cookies
                </p>
            </Link>
            <Link 
                  className = 'navbarItem'
                  to="/?category=salads"
            >
                <p className = 'navbarText'>
                    Salads
                </p>
            </Link>
        </div>
        <div className = "navbarButtons">
          {/* If user authenticated he see in the navbar login and register for navigation */}
          {/* If user not authenticated he see logout */}
           { !auth.isAuthenticated ? (
              <>
                  <Link 
                      to = "/login" 
                      className = "loginBtn"
                  >
                    Login
                  </Link>
                  <Link 
                      to = "/register" 
                      className = 'registrationBtn'
                  >
                    Registration
                  </Link>
              </>
            ) : (
              <Link 
                  onClick = {logoutHandler} 
                  className = 'registrationBtn'
              >
                Logout
              </Link>
           
          )}
        </div>
         {/* Menu conversion depending on the size of the device. */}
         { menuClicked ? (
                <FaRegTimesCircle size={25} className="navbarMenu" onClick={toggleMenuClicked}/>
            ) : (
                <FaBars size={25} className="navbarMenu" onClick={toggleMenuClicked}/>
            )
        } 
    </nav>
  )
}

export default Header;