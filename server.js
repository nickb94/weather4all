const express = require ('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/getdata", (res,req,err)=>{

    res.send("Thanks tou");

})


app.listen("5000",()=>{

    console.log("runningn at 5000");

})