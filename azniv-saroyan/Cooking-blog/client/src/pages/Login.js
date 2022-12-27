import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {useHttp, useMessage} from '../hooks/index'
import {AuthContext} from '../context/AuthContext'
import { FcApproval } from "react-icons/fc";
import '../styles/loginStyles/login.scss'

function Authorization() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const message = useMessage()
  const [errorText, setErrorText] = useState('')

  //Get parameters from useHttp hook
  const {loading, request, error, clearError } = useHttp();
  
  //Initial state form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  //Get current values from fields
  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  } 
 
  //Send request in server in auth/login router for login user
  const loginHandler = async () => {
    try {
      handleError()
      const data = await request('auth/login', 'POST', {...form})
      auth.login(data.token, data.id, data.role, data.firstName, data.lastName)  
      message(data.message) 
      navigate('/')
    } catch(err) {
      console.log(err)
      setTimeout(()=>{
        setErrorText('User not found.')
      }, 1300)
      setTimeout(()=>{
        setErrorText('')
      }, 5000)
    }
  }

  //Then click the "Register" button to go to the Register page
   const redirectRegister = () => {
    navigate('/register')
  }
  
   //Validation error handler
  const handleError = () => {
    if(form.firstName.length < 2) {
      setErrorText('First name must have at least 2 characters')
    }else if(form.lastName.length < 2) {
      setErrorText('Last name must have at least 2 characters')
    }else if(form.password.length < 6) {
      setErrorText('Password must have at least 6 characters')
    }
  }

  return (
    <div className = "login">
      <div className = "loginContainer">
          <img src={require('../images/vinegret.jpeg')} className = "loginImg"></img>
          <form className ="loginCard">
                <p className = "loginTitle">Cooking blog</p>
                <input 
                      type = "text" 
                      placeholder = "First name" 
                      className = "loginFilds"
                      name="firstName"
                      maxLength="30"
                      value={form.firstName}
                      onChange = {changeHandler}
                />
                <input 
                      type = "text" 
                      placeholder = "Last name" 
                      className="loginFilds"
                      name="lastName"
                      maxLength="30"
                      value={form.lastName}
                      onChange = {changeHandler}
                />
                <input 
                      type = "password" 
                      placeholder = "Password" 
                      maxLength="30"
                      className="loginFilds"
                      name="password"
                      value={form.password}
                      onChange = {changeHandler}
                />
                <div
                  className='errorText'
                >
                  {errorText}
                </div>
                <button 
                        className="loginBtn" 
                        onClick={loginHandler}
                        disabled={loading}
                >
                Login
                </button>
              
                <div className = "registerComponent">
                    <p className = 'loginText'>Don't you have an account?</p>
                    <button
                      className = "registerBtn"
                      onClick= {redirectRegister}
                    >
                    Registration
                    </button>
                </div>
            </form> 
        </div> 
    </div>
  )
}

export default Authorization;