require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;

const app = express();
app.use(express.json());

let db_url = process.env.DB_CONNECTION;
mongoose.connect(db_url);

const db_connection = mongoose.connection;
db_connection.once("open", ()=>{
    console.log(`db connection established`);
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});