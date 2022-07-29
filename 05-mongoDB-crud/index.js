require("dotenv").config();
const express = require("express");
const app = express();
const usersRoute = require("./routes/user")
const mongoose = require("mongoose");

const port = process.env.PORT;
const db_url = process.env.DB_CONNECTION;


app.use(express.json());
app.use("/users",usersRoute);

app.listen(port, ()=>{console.log(`server started on port no: ${port}`)});
mongoose.connect(db_url);
const connection = mongoose.connection;
connection.once("open", ()=>{console.log(`DB connected.`)})

