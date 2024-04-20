import express from "express";
import db from "./db.js";
import { person } from "./models/person.js";
import bodyParser from "body-parser";
import { menu } from "./models/Menu.js";
import Personrouter from "./routes/personRoutes.js"; 
import menuRouter from "./routes/menuRoutes.js";

const app = express();
app.use(bodyParser.json()) //req.body

app.get("/", (req, res) => {
    res.send("<h1>welcome to home page</h1> <p>this is my paragraph</P>")
});

// ->:> routes for person <--
app.use("/person",Personrouter)

// ->:> routes for menue <--
app.use("/menu", menuRouter)


app.listen(3000, () => {
    console.log("servr is running")
});

