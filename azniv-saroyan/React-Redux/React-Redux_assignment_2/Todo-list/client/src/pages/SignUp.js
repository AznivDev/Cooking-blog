import React from 'react'
import '../styles/signUp.scss'
import SignUpImage from '../images/sign_up.svg'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      errorText: ''
    }
  }
  handleClick() {
    this.handleValidate()
    if(this.state.password === this.state.repeatPassword) {
      console.log("yes")
    } else {
      this.setState({errorText: 'Passwords are not matches.'})
      return
    }
  }
  validateEmail = (email) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);    
    return regex.test(email)
  }
  handleValidate() {
    if(this.state.name.length < 2) {
      this.setState({errorText: 'Name must have at least 6 characters.'})
    }
    if(this.state.password.length < 6) {
      this.setState({errorText: 'Password must have at least 6 characters.'})
    }
    if(this.validateEmail(this.state.email) === false) {
      this.setState({errorText: 'Invalid mail format.'})
    }
  }
  handleChange(e) {
    if(e.target.name === 'name') {
      this.setState({name: e.target.value})
    }
    if(e.target.name === 'email') {
      this.setState({email: e.target.value})
    }
    if(e.target.name === 'password') {
      this.setState({password: e.target.value})
    }
    if(e.target.name === 'repeatPassword') {
      this.setState({repeatPassword: e.target.value})
    }
  }
    render() {
      return (
        <div className='signUpWrapper'>
            <div className='signUpBody'>
              <div className='svgContainer'>
                <img 
                    src={SignUpImage} 
                    className = "signUpImg"
                    alt = "Sign up image"
                />
              </div>
              <div className='fieldsContainer'>
                <div className='signUpFields'>
                  <p className='signUpTitle'>
                    Sign up
                  </p>
                  <input 
                    type='text' 
                    name='name' 
                    placeholder='name'
                    className='signUpField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <input 
                    type='password' 
                    name='password' 
                    placeholder='password' 
                    className='signUpField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <input 
                    type='password'
                    name='repeatPassword' 
                    placeholder='repeat password' 
                    className='signUpField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <input 
                    type='email' 
                    name='email' 
                    placeholder='email' 
                    className='signUpField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <div className='errorSendContainer'>
                    <p 
                      name='errorText'                
                      className='errorField'
                    > 
                      {this.state.errorText}
                    </p>
                    <button
                      className='signUpButton'
                      onClick={() => {
                        this.handleClick()
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
  }
  
  export default SignUp