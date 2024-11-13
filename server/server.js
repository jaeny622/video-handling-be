import express from "express";

const PORT = 4000;

const app = express();

app.get("/", () => {
  console.log("?");
});

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
