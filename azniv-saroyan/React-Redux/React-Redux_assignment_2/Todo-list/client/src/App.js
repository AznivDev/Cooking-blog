import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Home from './pages/Home'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes >
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/signUp" element={ <Signup /> }></Route> 
                <Route path="/signIn" element={ <Signin /> }></Route>  
        </Routes> 
      </div>
    )
  }
}

export default App;