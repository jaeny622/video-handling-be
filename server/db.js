import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://jaeny96:dudejr86532@cluster0.ro4mh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

const handleDBOpen = () => console.log("connect DB");
const handleDBError = (err) => console.error(err);

db.on("error", handleDBError);
db.once("open", handleDBOpen);
