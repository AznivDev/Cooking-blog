import {db} from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {validationResult } from 'express-validator';
import * as dotenv from 'dotenv'
dotenv.config()

//register
export const register = (req, res) => {
    const errors = validationResult(req)
        //If Validation errors no empty return status 400 and errors array
        if(!errors.isEmpty()) {
            return res.status(400).json({ 
               errors: errors.array(),
               message: 'Incorect data during registration'
           
           })
        }
    try {
        //Check existing user
        const q = 'SELECT * FROM users WHERE email = ? OR firstName = ?';
    
        db.query(q, [req.body.email, req.body.firstName], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.length) return res.status(409).json({
              message: 'User already exists!'
            });
        //Hash the password 
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

        //Create user in this role  
            const userRole = 'user';

        //Create a user
            const q = "INSERT INTO users(`firstName`,`lastName`, `email`, `password`, `role`) VALUES (?)";
        
        // const userRole = 'user'
            const values = [req.body.firstName, req.body.lastName, req.body.email, hash, userRole];
    
            db.query(q, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                    return res.status(200).json({message: 'User has been created.'});
                });
            });
    }catch (e) {
      res.status(400).json({ message : 'Registration error' })
    }
}

//login
export const login = (req, res) => {
  const errors = validationResult(req)
        //If Validation errors no empty return status 400 and errors array
        if(!errors.isEmpty()) {
            return res.status(400).json({ 
               errors: errors.array(),
               message: 'Incorrect data during login'
           
           })
        }
  try {
  //Check user
  const q = 'SELECT * FROM users WHERE firstName = ? AND lastName = ?';

  db.query(q, [req.body.firstName, req.body.lastName], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({message: "User not found!"});
 
    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({message: 'Wrong username or password!'})
    
    //Generate token.
    const token = jwt.sign(
        { id: data[0].id }, 
        process.env.SECRET_KEY 
        // {expiresIn: "60d"} 
    )
    const { password, ...payload } = data[0]
   
    const userData = {
        token,
      ...payload
    }
  
    const role = payload.role
    res.cookie('access_token', token, {
        httpOnly: true,
    })
    res.cookie('role', role, {
      httpOnly: true,
    })
    .status(200)
      .json(userData)
    })
  } catch (err) {
    res.status(400).json({ message : 'User name or password is not valid' })
  }
}

//logout
export const logout = (req, res) => {
    res.clearCookie('access_token',{
        sameSite: 'none',
        secure:true
    }).status(200).json({message: 'User has been logged out.'})
}