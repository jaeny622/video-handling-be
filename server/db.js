import mongoose from "mongoose";

mongoose.connect(
  "mongodb://jaeny96:dudejr86532@cluster0-shard-00-00.ro4mh.mongodb.net:27017,cluster0-shard-00-01.ro4mh.mongodb.net:27017,cluster0-shard-00-02.ro4mh.mongodb.net:27017/?ssl=true&replicaSet=atlas-8fvh1f-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

const handleDBOpen = () => console.log("connect DB");
const handleDBError = (err) => console.error(err);

db.on("error", handleDBError);
db.once("open", handleDBOpen);
