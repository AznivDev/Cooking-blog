import { check } from 'express-validator'

//Validations for register
const registerValidation = [
    check('firstName', 'User first name must have at least 2 characters').isLength({ min: 2 }),
    check('lastName', 'User last name must have at least 2 characters').isLength({ min: 2 }),
    check('password', 'Password must have at least 6 characters').isLength({ min: 6 }),
    check('email', 'Invalid mail format').isEmail()
]

//Validations for login
const loginValidation = [
    check('firstName', 'User first name cannot be empty').notEmpty(),
    check('password', 'Enter passwordrs').exists()
]

//Validations for create and update posts
const postValidation = [
    check('title', 'Title must have at least 3 characters').isLength({ min: 3, max: 50 }).isString(),
    check('link', 'Invalid link').isURL(),
    check('recipe', 'Recipe must have at least 10 characters').isLength({ min: 2, max: 1000 }).isString(),
    check('category', 'Category no checked').notEmpty()
]

//Validations for create and update comments
const commentValidation = [
    check('comment', 'Text must have at least 2 characters').isLength({ min: 2, max: 50 }).isString()
]

export {
    registerValidation,
    loginValidation,
    postValidation,
    commentValidation
}