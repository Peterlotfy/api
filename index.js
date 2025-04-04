import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import cambsRoute from "./routes/cambs.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()
dotenv.config()


const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
} catch (error) {
    throw error;
}}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/cambs",cambsRoute);
app.use("/api/rooms",roomsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
    });
});

app.listen(8800,()=>{
    connect()
    console.log("server active on port 8800");
})