import {db} from '../db.js'
import { validationResult } from 'express-validator'

///Get comments
export const getComments = (req, res) => {
    const postId = req.params.postId
   
    try {
        const q = "SELECT id, `comment`, `user_name`, `user_id`, `date` FROM comments WHERE post_id = ? order by id desc"

        db.query(q, [postId], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(data)
        });
    } catch(err) {
        console.log(err)
    }
  }

//// Add comment
export const addComment = (req, res) => {
    const errors = validationResult(req)
    const adminRole = 'admin'
    
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Incorrect data during create post'
        })
    }
    try {
        const q = "INSERT INTO comments(`comment`, `user_id`, `user_name`, `role_admin`, `post_id`, date) VALUES (?)"

        const values = [
            req.body.comment,
            req.body.userId,
            req.body.userName,
            adminRole,
            req.body.postId,
            req.body.date
        ]
       
        db.query(q, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            };
            return res.status(200).json({message: 'Comment hase been created'})
        
        })
    } catch (err) {
        console.log(err)
    }
} 

///// Delete comment
export const deleteComment = (req, res) => {
    try {
        const userId = req.body.userId
        const commentId = req.body.commentId
        const userRole = req.body.userRole
        
        const q  = "DELETE FROM comments WHERE `id`=? AND (`user_id`=? OR `role_admin`=?)"

        db.query(q, [commentId, userId, userRole], (err, data) => {
            if(err) return res.status(403).json("You can't delete comment!")
            return res.status(200).json("Comment deleted.")
        })
    } catch(err) {
        console.log(err)
    }
}

