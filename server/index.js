import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from AWS!");
});

app.get("/newRoute", (req, res) => {
    res.send("Welcome to the new route");
});

app.get("/anotherRoute",(req, res)=>{
res.send("Added another route!!!!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
