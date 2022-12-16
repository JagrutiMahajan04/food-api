import express from "express";

const app = express();

app.use(express.json());

// using array as a temprorary database
const db = [{
    id: 1,
    title: 'idli',
    price: 15,
    category: 'breakfast'
},
{
    id: 2,
    title: 'Dosa',
    price: 20,
    category: 'breakfast'
}]

//get all items
app.get('/all-food-items', (req, res) => {
    res.json({
        success: true,
        data: db,
        message: 'All food items fetched successfully'
    })
})

// add new item
app.post('/all-food-items', (req, res) => {

    const { id, title, price, category } = req.body;

    //long method for get,post
    // const id = req.body.id;
    // const title = req.body.title;
    // const price = req.body.price;
    // const category = req.body.category;

    const newItem = {
        id: id,
        title: title,
        price: price,
        category: category
    }

    //check if food item already exists the same id
    db.forEach((item) => {
        if (item.id === id) {
            return res.json({
                success: false,
                message: 'Food item already exists'
            })
        }
    })

    db.push(newItem);

    res.json({
        success: true,
        data: newItem,
        message: 'New food items fetched successfully'
    })
})

app.get('/food-item-by-id', (req, res) => {

    //read id from query params
    const id = req.query.id

    db.forEach((item) => {
        if (item.id == id) {
            return res.json({
                success: true,
                data: item,
                message: 'Food item fetched successfully'
            })
        }
    })
})

app.get('/delete-food-item-by-id',(req,res)=>{
    const id = req.query.id

    db.forEach((item, index)=>{
        if(item.id == id){
            db.splice(index, 1)
            return res.json({
                success: true,
                data: db,
                message: 'Food item deleted successfully'
            })
        }
    })

    return res.json({
        success: false,
        data: null,
        message: 'Food item not found.'
    })

})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})