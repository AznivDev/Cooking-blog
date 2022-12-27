import {db} from '../db.js'

//search posts
export const searchPosts = (req, res) => {
    const search = req.query.title
        const q = 'SELECT * FROM posts WHERE `title` = ? order by id desc'
        db.query(q, [search], (err, data) => {
          if(err) {
            return res.send(err)
          }
          return res.status(200).json(data)
        })
  }
  