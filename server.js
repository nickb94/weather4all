const express = require ('express');
const app = express();
// const PORT = process.env.PORT || 5000;
app.use(express.static("docs"));
app.use(express.json());

app.get("/getdata", (res,req,err)=>{

    res.send("Thanks tou");

})


app.listen(5000,()=>{

    console.log("runningn at 5000");

})