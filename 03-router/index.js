const express = require("express");
const userRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, ()=>{
    console.log(`server started on port no ${port}`);
});

