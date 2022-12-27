import {Router} from 'express'
import {searchPosts} from '../controllers/search.js'

const router = new Router()

router.get('/search/:title', searchPosts)

export default router