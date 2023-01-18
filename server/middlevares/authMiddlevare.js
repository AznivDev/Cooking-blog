import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export const checkToken = (req, res, next) => {
    const token = req.cookies.access_token

    if (!token) {
      return res.status(401).json({message: 'Not authenticated!'})
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json({message: 'Token is not valid!'})
    })
    next()
}

