import express from "express";

import { deleteUser, editUser, see } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;
