import express  from "express";
import dotenv from 'dotenv';
import multer from "multer";



const app = express();
dotenv.config();
app.use(express.json());

//Database import file
import connectDb from "./db/connectionDb.js";
//database connection 
const DATABASE_URL = process.env.DATABASE_URL;
connectDb(DATABASE_URL);


//multer error handler 
app.use((err, req, res, next) => {
    if(err instanceof multer.MulterError){
        return res.status(418).json({
            err_code: err.code,
            err_message: err.message
        })
    }else{
        return res.status(500).json({
            err_code: 409,
            err_message: "Something went wrong!!"
        })
    }
});

//import route file 
import userRouter from './router/api.js';
app.use('/api/v1', userRouter);


const port =  process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`Server is on: 3000`)
});



