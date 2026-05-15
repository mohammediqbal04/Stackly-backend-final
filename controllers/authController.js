import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

//Register 
export const registerUser = async (req,res) => {
  try{
    const {name, email, password} = req.body;

    //check user
    const userExists = await User.findOne({ email });
    if(userExists){
      return res.status(400).json({
        message: "User already exists"
      });
    }

    //hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //user create
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(200).json({
      message: "user registered successfully",
      user
    });
  } catch(error){
    res.status(500).json({
      message: error.message
    })
  }
};

//Login
export const loginUser = async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if(!user){
      return res.status(401).json({
        message: "user is not found"
      })
    }

    //password mismatch
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);
    if(!isMatch){
      return res.status(401).json({
        message: "Invalid credentials"
      })
    }

    //Token generate
    const token = jwt.sign(
      {
        id: user._id
      }, process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      message: "Login Successful",
      token
    })

  } catch(error){
      res.status(500).json({
        message: error.message,
      }, console.log("error-----", error))
  }
}