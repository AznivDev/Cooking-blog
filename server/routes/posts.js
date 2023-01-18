import {Router} from 'express'
import {postValidation} from '../validations.js'
import {checkToken, checkRole} from '../middlevares/index.js'
import {addPost, getPosts, getPost, deletePost, updatePost} from '../controllers/post.js'

const router = new Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.post('/posts', checkToken, checkRole, postValidation, addPost)
router.delete('/posts/:id', checkToken, checkRole, deletePost)
router.put('/posts/:id', checkToken, checkRole, postValidation, updatePost)


export default router