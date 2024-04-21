import mongoose from "mongoose";

//define the mongodb connection URL 
// const mongodbURL = "mongodb://127.0.0.1:27017/hotels"
const mongodbURL = process.env.MONGODB_URL

//Set up mongodb connection

mongoose.connect(mongodbURL)

const db = mongoose.connection;

db.on("connected", () => {
    console.log("mongodb is connected");
});

db.on("error", (err) => {
    console.log("error:", err);
});

db.on("diconnected", () => {
    console.log("mongodb is connected");
});

export default db;
