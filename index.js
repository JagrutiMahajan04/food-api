import express  from "express";

const app = express();

app.use(express.json());

app.get('/coffee',(req,res)=>{
    //res.send("Cold coffee ☕");

    
    res.json({
        menu:"Cold Coffee ☕",
        price:"Rs 30"
    })
})

app.post('/coffee',(req,res)=>{

    //console.log(req.body);

    const tableNumber =req.body.tableNumber;
    const coffeeType = req.body.coffeeType;

    res.json({
        orderDetails:`Table ${tableNumber} ordered a ${coffeeType}`
    })
})

app.listen(5000, ()=>{
      console.log("Server is listening on port 5000")
})