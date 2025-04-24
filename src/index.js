// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

// const port = process.env.PORT || 8000

connectDB()
.then(()=>{
  app.on("error",()=>{
    console.log("error: ",error)
    throw error
  })
  app.listen(process.env.PORT,()=>{
    console.log(`the sever is running a port: ${process.env.PORT}`)
  })
 
})
.catch((err)=>{
  console.log("mongodb connection failed !!! ", err)
})





















/*
import express from "express";
const app = express();
(async ()=>{
    try {
      await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      app.on("error",()=>{
        console.log("ERR: ",error)
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`app listening on port ${process.env.PORT}`)
      })

    } catch (error) {
        console.log("ERROR: ",error)
        throw err
    }
})()


*/