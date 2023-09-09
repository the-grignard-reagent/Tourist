import express from "express";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import mongoose from "mongoose";
import { MongoClient } from 'mongodb';
import cookieParser from "cookie-parser";
import cors from "cors"

// const proxy = 'http://iec2020007:Password@2022@172.31.2.3:8080'; // Replace this with your proxy URL
// const url = `mongodb://${proxy}/mongodb://localhost:27017/mydb`;


const app = express(); 
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO); 
      console.log("Connected to mongoDB.");
    } catch (error) {   
      throw error; 
    }
  };
   
  // mongoose.connection.on("disconnected", () => {
  //   console.log("mongoDB disconnected!"); 
  // });
 
  // mongoose.connection.on("connected", () => {
  //   console.log("mongoDB connected!");
  // });


  // MIDDLEWARE
  // app.use(cors())
  app.use(cookieParser())
  app.use(express.json())


 app.use("/api/auth", authRoute);
 app.use("/api/users", usersRoute);
 app.use("/api/hotels", hotelsRoute);
 app.use("/api/rooms", roomsRoute);
  // app.get("/", (req,res) =>{
  //   res.send("Hello first request!")
  // })

  app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success : false,
      status : errorStatus,
      message : errorMessage,
      stack : err.stack,
    });
    // console.log("Hi! I'm a middleware")
    //  return res.status(500).json("Hello error from Handler!")
  })


  app.listen(8800, () => { 
    connect();
    console.log("Connected to backend.");
  });