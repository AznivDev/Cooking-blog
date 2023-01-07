const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Users } = require("../db.js");

//register
const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);
    const email = await Users.findOne({
      where: {
        mail: req.body.mail,
      },
    });
    if (email) {
      return res.status(409).json({ message: "User already exists!" });
    }
    const user = await Users.create({
      name: req.body.name,
      password: hash,
      mail: req.body.mail,
    });
    await user.save();
    res.status(200).json({ message: "User has been created." });
  } catch (e) {
    res.status(400).json({ message: "Registration error" });
  }
};
//login
const login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        name: req.body.name,
        mail: req.body.mail,
      },
    });
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "User not found!" });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    res.cookie("user_name", user.name, {
      httpOnly: true,
    });
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(token);
  } catch (e) {
    res.status(400).json({ message: "User name or password is not valid" });
  }
};
module.exports = {
  register,
  login,
};
