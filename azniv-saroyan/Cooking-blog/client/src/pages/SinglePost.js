import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import ReactPlayer from 'react-player'
import moment from 'moment'
import {AiTwotoneDelete, AiTwotoneEdit} from 'react-icons/ai'
import {useHttp, useAuth} from './../hooks/index'
import {Comments} from '../components/index'
import './../styles/singlePostsStyles/singlePostsStyles.scss'

const SinglePost = () => {
  const [post, setPost] = useState({})
  const [deleteClicked, setDeleteClicked] = useState(false);
  const {loading, request} = useHttp();
  const {userRole} = useAuth()

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

   //Delete button clicked or no
   const toggleDeleteClicked = () => {
    setDeleteClicked(!deleteClicked);
    }

//Show single post
useEffect(() => {
  const fetchData = async () => {
    try {
       await fetch(`/posts/${postId}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setPost(data)
        }) 
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, [postId]);

//Delete post
const handleDelete = async () => {
    try {
      await request(`/posts/${postId}`, 'DELETE');
      navigate("/")
    } catch (err) {
      console.log(err);
    }
    
}

  return (
      <div 
          className = "singlePost" 
          key = {post.id}
      > 
       { userRole === 'admin' ? (
                    <div className = "deleteEdiitPosts">
                      <div 
                          className = {
                            deleteClicked ? 'confirmContainer confirmContainer--active' : 'confirmHidden' 
                          }
                      >
                        <p className = 'confirmText'>Are you sure you want to delete this post?</p>
                        <div className = 'confirmButtons'>
                            <button 
                                className='confirmBtn'
                                onClick={handleDelete}
                            >
                                Yes
                            </button>
                            <button 
                                className='confirmBtn'
                                onClick={toggleDeleteClicked}
                            >
                                Cancel
                            </button>
                        </div>
                  </div>
                  <AiTwotoneDelete 
                      className='deletePost'
                      onClick={toggleDeleteClicked}  
                  />
                  <Link
                      className='editPost'
                      to={'/admin?edit=2'}
                      state={post}
                  >
                      <AiTwotoneEdit /> 
                  </Link> 
              </div>
          ):(
              <></>
          )} 
          <div className='postContainer'>
              <p 
                  className = "postTitle">
                  {post.title}
              </p>
              <ReactPlayer
                  url={post.link}
                  width = "100%"
              /> 
              <div
                  className='postContent'
                  dangerouslySetInnerHTML={{ __html: post.recipe }}
              />
                  <p 
                    className='createDate'
                  >
                      Posted {moment(post.date).fromNow()}
                  </p>
              <Comments/>   
            </div>
      </div>     
  );
};

export default SinglePost;