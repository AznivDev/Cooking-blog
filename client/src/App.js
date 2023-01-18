import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Footer, GoToTop} from './components/index'
import { Home, AdminDashboard, Login,  Register, SinglePost, SearchPost} from './pages/index'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/index'

function App() {
 const {login, logout, token, userId, userRole} = useAuth()
 //user authenticated?
 const isAuthenticated = !!token
  
 return (
  //Context for all client side using provider
    <AuthContext.Provider value = {{
      login, 
      logout,
      token, 
      userId, 
      isAuthenticated, 
      userRole
    }}
    >
      <div>
        <Navbar/>
        {/* <Search/> */}
        <>
        {isAuthenticated ? (
          <>
          { !!(userRole === 'admin') ? (
            // Routes for admin
            <Routes >
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/admin" element={ <AdminDashboard/> }></Route> 
                <Route path="/post/:id" element={ <SinglePost/> }></Route> 
                <Route path="/search/:title" element={ <SearchPost/> }></Route>  
                <Route path="*" element={<Navigate to="/" />}></Route>  
            </Routes>     
            ):(
            //Routes for authorized users
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/post/:id" element={ <SinglePost/> }></Route>
                <Route path="/search/:title" element={ <SearchPost/> }></Route>  
                <Route path="*" element={<Navigate to="/" />}></Route>  
            </Routes>
            )
          } 
          </>
          ) : (
            // {/* //Routes for no authorized users */}
            <Routes>
                <Route path="/" element={ <Home/> }></Route>          
                <Route path="/login" element={ <Login/> }></Route>
                <Route path="/post/:id" element={ <SinglePost/> }></Route> 
                <Route path="/search/:title" element={ <SearchPost/> }></Route>  
                <Route path="/register" element={ <Register/> }></Route>
                {/* <Route path="*" element={<Navigate to="/" />}></Route>   */}
            </Routes>
          )
        }
        </>
        <GoToTop/>
        <Footer />  
     </div>
    </AuthContext.Provider>
  );
}

export default App;
