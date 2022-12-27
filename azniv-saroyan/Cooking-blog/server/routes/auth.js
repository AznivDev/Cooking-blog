import {Router} from 'express'
import { register, login, logout} from '../controllers/auth.js'
import {registerValidation, loginValidation} from '../validations.js'

const router = new Router()

router.post('/register', registerValidation, register)
router.post('/login', loginValidation, login)
router.post('/logout', logout)

export default router