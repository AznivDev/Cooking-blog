import React, {useEffect, useState, useContext} from 'react'
import {useNavigate, useLocation,} from 'react-router-dom'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import moment from 'moment'
import {useHttp, useMessage, useAuth} from '../hooks/index'
import {AuthContext} from '../context/AuthContext'
import '../styles/adminStyles/admin.scss'

function Admin() {
  const {loading, request, error, clearError} = useHttp()
  const state = useLocation().state;
  const message = useMessage()
  const [value, setValue] = useState(state?.recipe || "")
  const [title, setTitle] = useState(state?.title || "")
  const [link, setLink] = useState(state?.link || "")
  const [category, setCategory] = useState(state?.category || "")
  const [validatioError, setValidatioError] = useState("")

  const navigate = useNavigate() 
  //Show and clear message errors
  useEffect(() => {
    message(error);
    clearError();
 },[error, message, clearError])

  const handleClick = async (e) => {
    e.preventDefault()
    errorHandler()
    try {
      state
        ? await request (`/posts/${state.id}`, 'PUT', {
            title,
            recipe: value,
            link,
            category,
          })
        : await request (`/posts/`, 'POST', {
            title,
            recipe: value,
            link,
            category,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm"),
          });
          message() 
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const urlValidationHandler = (url) => {
    const regex = new RegExp('(https://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
    return regex.test(url)
  }

  //Validation error handler
const errorHandler = () => {
  if(title.length < 3) {
    setValidatioError('Title must have at least 3 characters.')
  } else if(title.length > 50) {
    setValidatioError('Title must have at maxinum 50 characters.')
  } else if(urlValidationHandler(link) === false) {
    setValidatioError('Invalid link.')
  } else if(value.length < 10) {
    setValidatioError('Recipe must have at least 10 characters.')
  } else if(value.length > 1000) {
    setValidatioError('Recipe must have at maximum 1000 characters.')
  } else if(category === '') {
    setValidatioError('Category no checked.')
  }

  setTimeout(() => {
      setValidatioError('')
  }, 3000)
}

  return (
    <div className = "adminDashboard">
      <h1 className ='adminTitle'>CREATE OR UPDATE POSTS</h1>
      <form className = "adminContainer" >
        <input 
            type = "text"
            className = "postTitle"
            value={title} 
            maxLength="70"
            placeholder = "title" 
            onChange={(e) => setTitle(e.target.value)}
            />
        <input 
            type = "text" 
            className = "postLink"
            value = {link}
            maxLength="1000"
            placeholder = "youtube link" 
            onChange={(e) => setLink(e.target.value)}
        />  
        <ReactQuill 
          theme = "snow" 
          value = {value}
          onChange = {setValue}
          className = "postContent"
          placeholder = "recipe"  
        />
        <div className = 'category'>
          <div className = 'categoryItem'>
              <input
                  type = 'radio'
                  name = 'category'
                  value = 'armenianFoods'
                  id = 'armenianFoods'
                  checked = {category === "armenianFoods"}
                  onChange = {(e) => setCategory(e.target.value)}
              />
              <label htmlFor = "armenianFoods">Armenian foods</label>
            </div>
            <div className = "categoryItem">
                <input
                    type = 'radio'
                    name = 'category'
                    value = 'dishes'
                    id = 'dishes'
                    checked = {category === "dishes"}
                    onChange = {(e) => setCategory(e.target.value)}
                />
                <label htmlFor = "dishes">Dishes</label>
            </div>
            <div className = "categoryItem">
                <input
                    type = 'radio'
                    name = 'category'
                    value = 'cakes'
                    id = 'cakes'
                    checked = {category === "cakes"}
                    onChange = {(e) => setCategory(e.target.value)}
                />
                <label htmlFor = "cakes">Cakes</label>
            </div>
            <div className = "categoryItem">
                <input
                    type = 'radio'
                    name = 'category'
                    value = 'cookies'
                    id = 'cookies'
                    checked = {category === "cookies"}
                    onChange = {(e) => setCategory(e.target.value)}
                />
                <label htmlFor = "cookies">Cookies</label>
            </div>
            <div className = "categoryItem">
                <input
                    type = 'radio'
                    name = 'category'
                    value = 'salads'
                    id = 'salads'
                    checked = {category === "salads"}
                    onChange = {(e) => setCategory(e.target.value)}
                />
                <label htmlFor="salads">Salads</label>
            </div>
        </div>
      </form>
      <p  className = "error" >
          {validatioError}
      </p>
      <button 
            className = "addItem"
            onClick = {handleClick}
      >
        Save
      </button>  
    </div>
  )
}

export default Admin;