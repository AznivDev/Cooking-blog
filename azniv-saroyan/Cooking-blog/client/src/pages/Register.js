import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useHttp, useMessage} from '../hooks/index'
import '../styles/registerStyles/register.scss'

function Authorization() {
  const navigate = useNavigate()
  const message = useMessage()
  const [errorText, setErrorText] = useState('')

  //Get parameters from useHttp hook
  const {loading, error, clearError, request} = useHttp()

  //Initial state form
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: ''
  })

 //Show and clear message errors
  useEffect(() => {
     message(error)
     clearError()
  },[error, message, clearError])

  //Get current values from fields
  const changeHandler = event => {
    event.preventDefault()
    setForm({...form, [event.target.name]: event.target.value})
  } 

 // Send request in server in auth/register router for register user
  const registerHandler = async (e) => {
    e.preventDefault()
    handleError()
    try {
      const data = await request('/auth/register', 'POST', {...form})
      message(data.message)
      navigate('/login')
      } catch(err) {
       console.log(err)
    }
  }
  //Then click the "Login" button to go to the Login page
  const redirectLogin = () => { 
     navigate('/login')
  }
 //Validation error handler
  const validateEmail = (email) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);    
    return regex.test(email)
  }
  const handleError = () => {
    if(form.firstName.length < 2) {
      setErrorText('First name must have at least 2 characters')
    }else if(form.lastName.length < 2) {
      setErrorText('Last name must have at least 2 characters')
    }else if(validateEmail(form.email) === false) {
      console.log(validateEmail(form.email) === false)
      setErrorText('Invalid mail format')
    }else if(form.password.length < 6) {
      setErrorText('Password must have at least 6 characters')
    } 

    setTimeout(()=>{
      setErrorText('')
    }, 4000)
  }
 
  return (
    <div className = "register">
       <div className = "registerContainer">
          <img src={require('../images/vinegret.jpeg')} className = "registerImg"></img>
          <form className ="registerCard">
                <p className = "registerTitle">Cooking blog</p>
                <input 
                      type = "text" 
                      placeholder = "First name" 
                      className = "registerFilds"
                      name="firstName"
                      maxLength = "30"
                      value={form.firstName}
                      onChange = {changeHandler}
                />
                <input 
                      type = "text" 
                      placeholder = "Last name" 
                      className = "registerFilds"
                      name="lastName"
                      maxLength = "30"
                      value={form.lastName}
                      onChange = {changeHandler}
                />
                <input 
                      type = "text" 
                      placeholder = "Email" 
                      className="registerFilds"
                      name="email"
                      maxLength = "30"
                      value={form.email}
                      onChange = {changeHandler}
                />
                <input 
                      type = "password" 
                      placeholder = "Password" 
                      className="registerFilds"
                      name="password"
                      maxLength = "30"
                      value={form.password}
                      onChange = {changeHandler}
                />
                <p 
                  className='errorText'>{errorText}
                </p>
                <button 
                      className = "registerBtn"
                      onClick = {registerHandler}
                      disabled = {loading}
                >
                Registration
                </button>
                <div className = "loginComponent">
                    <p className = 'authText'>Are you registered?</p>
                    <button 
                          className = "loginBtn" 
                          onClick = { redirectLogin }
                    >
                    Login
                    </button>
                </div>
            </form> 
        </div> 
    </div>
  )
}

export default Authorization