import {createContext} from 'react'

function noop() {}
//In the logaut AuthContext function, everything results in nolay
export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  userName: '',
  userLName: '',
  isAuthenticated: false
})