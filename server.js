require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection");

//cors
const cors = require("cors");
//we'll configure this file later
//const corsOptions = require("./configs/cors.js");

//Bringing in Express
const express = require("express");
const app = express();

//other imports
const morgan = require("morgan");
//const songRouter = require("./controllers/song");

/////
//middleware
/////npm

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

/////
//Routes and Routers
////

//Route  for testing server
app.get("/", (req, res) => {
  res.json({ hello: "hello world" });
});

//app.use('/songs', songRouter);

//listener
app.listen(PORT, () => {
  console.log(`We're doing great on ${PORT}`);
});
