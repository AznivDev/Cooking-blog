const { Todos } = require('../db.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()
//addTodo
const addTodo = async (req, res) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Not authenticated!' })
        }
        let payload = jwt.verify(token, process.env.SECRET_KEY)
        let userId = payload.id
        const todo = await Todos.create({
            title: req.body.title,
            details: req.body.details,
            UserId: userId
        })
        if (todo) {
            return res.status(200).json({ message: 'Todo has been created.' })
        }
    } catch (e) {
        console.error(e)
    }
}
//getTodos
const getTodos = async (req, res) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1]
        let payload = jwt.verify(token, process.env.SECRET_KEY)
        let UserId = payload.id

        let todos = await Todos.findAll({
            where: {
                userId: UserId
            }
        })
        if (Object.keys(todos).length === 0) {
            return res.status(404).json({ message: 'Todos not found' })
        }
        return res.status(200).json(todos)
    } catch (e) {
        console.error(e)
    }
}
//deleteTodo
const deleteTodo = async (req, res) => {
    const token = req.headers.authorization.split('Bearer ')[1]
    let payload = jwt.verify(token, process.env.SECRET_KEY)
    let userId = payload.id
    try {
        await Todos.destroy({
            where: {
                id: req.query.id,
                UserId: userId
            }
        })
        return res.json("Todo has been deleted!")
    } catch (e) {
        console.error(e)
    }
}
//updateTodo 
const updateTodo = async (req, res) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1]
        let payload = jwt.verify(token, process.env.SECRET_KEY)
        let UserId = payload.id
        let todoId = req.query.id
        const textValue = await Todos.findOne(
            {
                where: {
                    id: todoId,
                    userId: UserId
                }
            })
        await Todos.update(
            {
                done: true,
                title: req.body.title,
                details: req.body.details,
            },
            {
                where: {
                    id: todoId,
                    userId: UserId
                }
            })

        if (!textValue) {
            return res.status(401).json({ message: "You can't change text!" })
        }
        if (req.body.details === textValue.dataValues.details) {
            return res.status(401).json({ message: 'Write new text' })
        }
        return res.status(200).json({ message: 'Todo changed!' })
    } catch (e) {
        console.error(e)
    }
}
module.exports = {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
}