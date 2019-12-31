const express = require ('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.static("docs"));
app.use(express.json());

app.get("/getdata", (req,res,err)=>{

    res.send("Thanks tou");
   

})


app.listen(PORT ,()=>{

    console.log("runningn at 5000");

})