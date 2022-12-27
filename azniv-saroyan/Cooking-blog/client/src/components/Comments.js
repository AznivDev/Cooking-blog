import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import moment from 'moment'
import {AiOutlineDelete} from 'react-icons/ai'
import {useHttp, useAuth} from '../hooks/index'
import '../styles/homeStyles/home.scss'
import './../styles/singlePostsStyles/singlePostsStyles.scss'

function Comments() {
    const {loading, request} = useHttp();
    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    const [comment, setComment] = useState('')
    const [commentsValues, setCommentsValues] = useState([])
    const {userId, userName, userRole, token} = useAuth()
    const [errorText, setErrorText] = useState('')
    
    //Clear fild for add comment
    function handleClick () {
        setComment('')
    }
   
    //Global function for update comments
    const updateComments = async () => {
        try {
            await fetch(`/comments/${postId}`)
            .then((res)=>{return res.json()})
            .then((data)=>{
                setCommentsValues(data)
            }) 
            .catch((err) => {console.log(err)})
        } catch (err) {
            console.log(err)
        }
    }

    //Create comment
    const handleComment = async (e) => {
        e.preventDefault()
        try{
        errorHandler()
        await request('/comments', 'POST', {      
                comment,
                userId,
                postId,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm"),
                userName,
                userId
        })
            handleClick()
        } catch (err) {
            console.log(err)
        }
        updateComments()
    } 

    // //Validation error handler
    const errorHandler = () => {
        if(!token) {
            setErrorText('You need to register to leave a comment.')
        } else if(comment.length < 2) {
            setErrorText('Text must have at least 2 characters.')
        } else if(comment.length > 50) {
            setErrorText('Text must have at maximum 50 characters.')
        }
        setTimeout(() => {
            setErrorText('')
           handleClick() 
        }, 2000)
    }

    //Delete comment
    const deleteComment = async (commentId) => {
        try{
            await request('/comments/commentId', 'DELETE', {
                commentId,
                userId,
                userRole
            })
        } catch(err){
                console.log(err)
        }
        updateComments()
    }

    //Generate comments
    useEffect(() => {
        async function fetchComments() {
            try {
                await fetch(`/comments/${postId}`)
                .then((res)=>{return res.json()})
                .then((data)=>{
                    setCommentsValues(data)
                }) 
                .catch((err) => {console.log(err)})
            } catch (err) {
                console.log(err)
            }
        }
        updateComments()
    }, [])  

    return (
        <>
            <div className="addComments">
                <input 
                    value = {comment}
                    name = "comments"
                    id = "commentFild" 
                    className = "commentFild" 
                    placeholder='Write comment'
                    onChange={(e) => {setComment(e.target.value)}}
                >
                </input>
                <p className = 'error'>
                    {errorText}
                </p> 
                <button className = "commentBtn"
                    onClick={handleComment}
                >Send</button>
            </div>
            <>
            {commentsValues.map((commentValue, index) => (                
                <ul 
                    className="commentsList"
                    id="commentsList"
                    key = {commentValue.id}
                >
                    <li>
                        <p 
                            className="userName"
                        >
                            {commentValue.user_name}
                        </p>
                        <div className="commentsItem">
                            <p 
                                className="commentsText"
                            >
                                {commentValue.comment}
                            </p>
                            <div>
                            { userId == commentValue.user_id || userRole == 'admin' ?  (
                                <AiOutlineDelete 
                                    className='deleteComment'
                                    onClick={()=>{deleteComment(commentValue.id)}}
                                />   
                                ):(
                                    <></>
                                )
                            }     
                            </div>
                        </div>
                        <small 
                            className = 'dateComment'
                        >
                            {commentValue.date}
                        </small>
                    </li>
                </ul>
             )
             )} 
             </>
        </>
    )
}

export default Comments

