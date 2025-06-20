const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) =>{
    //res.send("Hola Mundo")
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(3000, () =>{
    console.log('Server Running en Port', 3000);
})


