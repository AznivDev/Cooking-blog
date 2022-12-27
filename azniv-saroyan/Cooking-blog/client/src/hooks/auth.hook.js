import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';
let isAdmin = false
export const useAuth = () => {
  //Initial states for token, userId, userRole
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [userName, setUserName] = useState('')
  const [userLName, setUserLName] = useState('')

  //function for login
  const login = useCallback((jwtToken, id, role, firstName, lastName) => {
    setToken(jwtToken)
    setUserId(id)
    setUserRole(role)
    setUserName(firstName)
    setUserLName(lastName)

    //Save token, userId, userRole in the localStorage
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, 
      token: jwtToken,
      userRole: role,
      userName: firstName,
      userLName: lastName
    }))
  }, [])
  // console.log(userName)
   //Function for login. Clear token, userId, userRole
  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserRole(null)
    setUserName(null)
    setUserLName(null)
    localStorage.removeItem(storageName)
  }, [])

  //Function to check if data is in localStorage or not, shows local state.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      console.log(data.userRole)
      login(data.token, data.userId, data.userRole, data.userName, data.userLName)
    }
  }, [login])

  return { login, logout, token, userId, userRole, userName, userLName }
}