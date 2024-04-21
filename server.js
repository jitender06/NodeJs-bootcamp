import express from "express";
import bodyParser from "body-parser";
import Personrouter from "./routes/personRoutes.js"; 
import menuRouter from "./routes/menuRoutes.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
})
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json()) //req.body

app.get("/", (req, res) => {
    res.send("<h1>welcome to home page</h1> <p>this is my paragraph</P>")
});

// ->:> routes for person <--
app.use("/person",Personrouter)

// ->:> routes for menue <--
app.use("/menu", menuRouter)


app.listen(port, () => {
    console.log("server is running")
});

