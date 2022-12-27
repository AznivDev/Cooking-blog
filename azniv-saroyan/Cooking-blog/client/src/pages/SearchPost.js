import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Loading} from '../components/index'
import ReactPlayer from 'react-player'
import '../styles/homeStyles/home.scss'

function SearchPost() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const title = location.pathname.split("/")[2]
  const navigate = useNavigate()

  const [error, setError] = useState([])

 //Get and show posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        await fetch(`/search/title?title=${title}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setPosts(data)
          handleError(data)
        })
        .catch((err) => {
          console.log(err)         
        })
      } catch(error) {
         console.log(error)
      }
    }
    fetchPosts() 
    }, []) 

    const handleError = (data) => {
      if(data.length === 0) {
        setError('Recipe not found.')
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    }

  return (
    <div className = 'homeContainer searchPage'>
       { !!loading ? (
              <>
                  <Loading/> 
              </>
          ) : (
            <>
          <div className = 'error'>
            <p className = 'errorText'>{error}</p>
          </div>
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
      </>)}
  </div>
  )
}

export default SearchPost