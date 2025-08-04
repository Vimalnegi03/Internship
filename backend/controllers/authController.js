import User from "../models/authSchema.js";
import cookie from "cookie-parser"
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()
import bcrypt from 'bcrypt'
import { log } from "console";
export const register=async(req,res)=>{
   try {
     const {name,email,password, cuponCode}=req.body
     if(!name)
     {
         return res.status(400).json({message:"Please enter your name"})
     }
      if(!email)
     {
         return res.status(400).json({message:"Please enter your email"})
     }
      if(!password)
     {
         return res.status(400).json({message:"Please enter your password"})
     }
     const isEmailExist=await User.findOne({email:email})
     if(isEmailExist)
     {
        return res.status(400).json({message:"user already exist with this email"})
     }
  if(cuponCode)
{
    console.log(cuponCode);
    const user = await User.findOne({ cuponCode: cuponCode });
    console.log(user);
    if(!user)
    {
        return res.status(400).json({ message: "Please enter a valid coupon code" });
    }
    else {
        user.donationRaised = (user.donationRaised || 0) + 100;
        await user.save();
    }
}

   const generatedCoupon = crypto.randomBytes(4).toString('hex');
   const newUser=await User.create({
    name,
    email,
    password,
    cuponCode:generatedCoupon
   })
   newUser.password=""
   const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY})
   res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None"
});
   res.status(201).json({message:"User created successfully",data:newUser,success:true})
   } catch (error) {
    console.log(error.message)
   }
}



export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
          if(!email)
     {
         return res.status(400).json({message:"Please enter your email"})
     }
      if(!password)
     {
         return res.status(400).json({message:"Please enter your password"})
     }
     const user=await User.findOne({email:email})
     if(!user)
     {
        return res.status(400).json({message:"user does not exist with this email"})
     }
     const compare= await bcrypt.compare(password,user.password)
     console.log(compare)
     if(!compare)
     {
        return res.status(400).json({message:"Please provide the correct password"})
     }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY})
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None"
});
    return  res.status(201).json({message:"User login successfully",data:user,success:true})
    } catch (error) {
        console.log(error.message)
    }
}

export const logout=async(req,res)=>{
    res.cookie("token","")
    res.status(200).json({message:"User logged out successfully",success:true})
}
export const getUser = async (req, res) => {
  try {
    const id = req.user.id;
    console.log("User ID:", id);

    if (!id) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const user = await User.findOne({_id: id});
    console.log("User Found:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({ message: "Successfully fetched user details", success: true, data: userObj });
  } catch (error) {
    console.log("Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
}
