import express  from "express";

const app = express();
app.use(express.json());

app.get('/name',(req,res)=>{
    res.send("jagruti Mahajan");
})

app.get('/college', (req,res)=>{
    res.send("RGCER");
})

app.get('/branch', (req,res)=>{
    res.send("CSE");
})


app.listen(5000, ()=>{
      console.log("Server is running on port 5000")
})