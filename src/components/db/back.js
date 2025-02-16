import express from "express";
import cors from 'cors'
import jwt from "jsonwebtoken";
import {UserModel} from './db.js'
import connectDB from "./db.js";  
import bcrypt from "bcryptjs";

const app = express();
 app.use(express.json());
 app.use(cors());
 
 connectDB(); 
 
 app.post("/api/signup", async (req, res) => {
   try {
     const { username, password } = req.body;
 
     const existingUser = await UserModel.findOne({ username });
     if (existingUser) {
       return res.status(400).json({ message: "User already exists" });
     }
 
     const hashedPassword = await bcrypt.hash(password, 10);
 
     const newUser = new UserModel({
       username,
       password: hashedPassword,
     });
 
     await newUser.save();
 
     res.status(201).json({ message: "User registered successfully ✅" });
   } catch (err) {
     console.error("Error during signup ❌:", err);
     res.status(500).json({ message: "Internal server error" });
   }
 });
 
  

app.post("/api/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrrect credentials"
        })
    }
})


app.listen(3001, () => {console.log('running')})