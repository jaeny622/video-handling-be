import express from "express";
import {
  deleteVideo,
  editVideo,
  uploadVideo,
  getVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id", getVideo);
videoRouter.post("/edit", editVideo);
videoRouter.get("/delete", deleteVideo);
videoRouter.post("/upload", uploadVideo);

export default videoRouter;
