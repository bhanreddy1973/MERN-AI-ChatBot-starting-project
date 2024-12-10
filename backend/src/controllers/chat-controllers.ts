import { param } from "express-validator";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.js";

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
     const { message } = req.body;
     const user = await User.findById(res.locals.jwtData.id);
   if(!user )
    return res.status(401).json({message: "User not registered or token malfunctioned"});
   //grab chats of user
   //send all chats with new one to openAI Api
   //get latest response
   
};