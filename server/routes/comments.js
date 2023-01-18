import {Router} from 'express'
import { addComment, getComments, deleteComment} from '../controllers/comment.js'
import {checkToken, checkRole} from '../middlevares/index.js'
import {commentValidation} from '../validations.js'

const router = new Router()

router.post('/comments', commentValidation, checkToken, addComment)
router.get('/comments/:postId', getComments)
router.delete('/comments/:commentId', checkToken, deleteComment)


export default router