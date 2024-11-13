import express from "express";

import { join, login, logout } from "../controllers/userController.js";
import { homeVideos, search } from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/", homeVideos);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/logout", logout);
globalRouter.get("/search", search);

export default globalRouter;
