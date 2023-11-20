const UserSchema = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validations
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if user already exists
    const userExists = await UserSchema.findOne({ email });
    if (userExists) {
      return res.status(401).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    // Register the user
    const user = await UserSchema.create({
      name,
      email,
      password: hashedpassword,
    });

    if (user) {
      res.status(201).json({
        message: "User Added",
        name: user.name,
        _id: user.id,
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validations
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if user email exists
    const userFound = await UserSchema.findOne({ email });
    if (!userFound) {
      return res.status(401).json({ message: "email doesn't exists" });
    }

    // compare the password
    const passwordCheck = await bcrypt.compare(password, userFound.password);
    if (!passwordCheck) {
      return res.status(401).json({ message: "wrong email or password" });
    }

    if (userFound) {
      res.status(201).json({
        message: "User loged in",
        name: userFound.name,
        _id: userFound.id,
        email: userFound.email,
        token: generateJwtToken(userFound._id),
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const generateJwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
