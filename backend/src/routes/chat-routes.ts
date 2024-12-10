import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";
import { chartCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";

const chatRoutes = Router();

chatRoutes.post("/new",validate(chartCompletionValidator),verifyToken);

export default chatRoutes;