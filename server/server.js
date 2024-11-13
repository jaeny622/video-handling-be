import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("Welcome home");
};

app.use(cors({ origin: "http://localhost:5173" }), logger);
app.get("/", handleHome);

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
