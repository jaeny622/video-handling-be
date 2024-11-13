import express from "express";
import morgan from "morgan";
import cors from "cors";

import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(cors({ origin: "http://localhost:5173" }), logger);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
