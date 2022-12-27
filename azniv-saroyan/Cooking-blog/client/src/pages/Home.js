import React, {useEffect, useState, useContext} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FaSearch } from "react-icons/fa";
import {useAuth, ScrollToTop} from './../hooks/index'
import { Slider, Loading } from '../components/index'
import '../styles/homeStyles/home.scss'
const parser = new DOMParser();

function Home() {
  const [posts, setPosts] = useState([])
  const category = useLocation().search
  const {userName, userLName} = useAuth()
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
    //Global function for update comments
    const updatePosts = async () => {
      try {
          await fetch(`/posts/${category}`)
          .then((res)=>{
            return res.json()
          })
          .then((data)=>{
            setPosts(data)
          }) 
          .catch((err) => {
            console.log(err)
          })
      } catch (err) {
          console.log(err)
      }
  }

 //Get and show posts
  useEffect(() => {
     async function fetchPosts() {
      try {
        await fetch(`/posts/${category}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setPosts(data)
        })
        .catch((err) => {
          console.log(err)
          setLoading(true)
        })
      } catch(error) {
        console.log(error)
      }
   }
    updatePosts()
  }, [category]) 
 
  const searchPosts = () => {
    navigate(`/search/${title}`)
  }

  return (
    <div className = 'homeContainer'>
          <div className = 'searchUser'>
              <div className = 'searchContainer'>
                <div className = 'search'>
                  <input 
                    value = {title}
                    type = 'text' 
                    placeholder = 'Search recipe'
                    onChange = {
                      (e) => {
                        setTitle(e.target.value)
                    }
                  }
                  />
                </div>
                  <FaSearch 
                      className = 'serachButton' 
                      onClick = {searchPosts}
                  />
              </div>
              <p className = 'userName'
              >
                {!!userName? userName + " "  + userLName : 'Wellcome'}
              </p>
          </div>
          <Slider/>
          <ScrollToTop/>
          { !!loading ? (
              <>
                  <Loading/> 
              </>
          ) : (
            <div 
                className = "home" 
            >
                { posts.map((post, index) => ( 
                  <div 
                      className = "postContainer" 
                      key = {post.id}
                  > 
                    <div
                      className = 'react-player'
                    >
                      <ReactPlayer
                          url = {post.link}
                          width = "100%"
                      /> 
                    </div>
                    <Link  
                        className = 'seeMore'
                        to = {`/post/${post.id}`}
                    >  
                        <button 
                          className = 'moreBtn'
                        >
                          See more
                        </button>
                    </Link>               
                  </div>          
                  )
                )}     
            </div> 
          )}
    </div>
  )}
export default Home;