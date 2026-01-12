import express from "express";
const userRouter = express();
import {Login , register} from '../controller/authController.js';

userRouter.post('/register' , register);

userRouter.post('/login' , Login);


export default userRouter;