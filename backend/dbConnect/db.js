import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectToDb=async()=>{
    const db=await mongoose.connect(process.env.MONGO_URI);
    if(db.connection)
    {
        console.log("database connected successfully")
    }
    else
    throw new Error("db not connected")
}

export default connectToDb