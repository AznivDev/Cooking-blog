import {db} from '../db.js'
import {validationResult} from 'express-validator'
import * as dotenv from 'dotenv'
dotenv.config()

//Get posts
export const getPosts = (req, res) => {
    const q = req.query.category 
        ? 'SELECT * FROM posts WHERE category = ? order by id desc'
        : 'SELECT * FROM posts order by id desc'

    db.query(q, [req.query.category], (err, data) => {
        if(err) {
          console.log(err)
          return res.send(err)
        }
        return res.status(200).json(data)
    })
}

//Get single post
export const getPost = (req, res) => {
  const postId = req.params.id
  const q = "SELECT id, `title`, `link`, `recipe`, `date` FROM posts WHERE id = ? ";
  db.query(q, [postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

//Add post
export const addPost = (req, res) => {
  const errors = validationResult(req)
  //If Validation errors no empty return status 400 and errors array
  if(!errors.isEmpty()) {
       return res.status(400).json({ 
          errors: errors.array(),
          message: 'Incorrect data during create post'
      })
  }
  try {      
      const q = "INSERT INTO posts(`title`, `link`, `recipe`, `category`, date) VALUES (?)";
      const values = [
        req.body.title,
        req.body.link,
        req.body.recipe,
        req.body.category,
        req.body.date,
      ];
      db.query(q, [values], (err, data) => {
        if (err) {
          return res.status(500).json(err);
        };

        return res.status(200).json({message: 'Post has been created.'})
      })
  } catch (error) {
    console.log(error)
  }
}

//Delete post
export const deletePost = (req, res) => {
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ?";
    
    db.query(q, [postId], (err, data) => {
      if (err) return res.status(403).json("You can`t delete post!");

      return res.json("Post has been deleted!");
    });
  // });
};

//Update post
export const updatePost = (req, res) => {
    const errors = validationResult(req)
    //If Validation errors no empty return status 400 and errors array
    if(!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array(),
            message: 'Incorrect data during create post'
        })
    }
    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`link`=?, `recipe`=?, `category`=?  WHERE `id` = ?";

    const values = [req.body.title, req.body.link, req.body.recipe, req.body.category];

    db.query(q, [...values, postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
};

