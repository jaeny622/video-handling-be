import express from "express";
import {
  deleteVideo,
  editVideo,
  uploadVideo,
  watch,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get(":id", watch);
videoRouter.get("/edit", editVideo);
videoRouter.get("/delete", deleteVideo);
videoRouter.post("/upload", uploadVideo);

export default videoRouter;
