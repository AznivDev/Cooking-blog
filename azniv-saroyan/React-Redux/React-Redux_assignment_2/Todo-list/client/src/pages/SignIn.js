import React from 'react'
import '../styles/signIn.scss'
import SignInImage from '../images/sign_in.svg'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errorText: ''
    }
  }
  handleClick() {
    this.handleValidate()
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
  }
    render() {
      return (
        <div className='signInWrapper'>
            <div className='signInBody'>
              <div className='svgContainer'>
                <img 
                    src={SignInImage} 
                    className = 'signInImg'
                    alt = 'Sign in image'
                />
              </div>
              <div className='fieldsContainer'>
                <div className='signInFields'>
                  <p className='signInTitle'>
                    Sign in
                  </p>
                  <input 
                    type='text' 
                    name='name'
                    placeholder='name'
                    className='signInField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    className='signInField'
                    onChange={(e) => {
                      this.handleChange(e)
                    }}
                  />
                  <input 
                    type='email' 
                    name='email' 
                    placeholder='email'
                    className='signInField'
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
                      className='signInButton'
                      onClick={() => {
                        this.handleClick()
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
  }
  
  export default SignIn