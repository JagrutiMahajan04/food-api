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
    const id = req.body.id;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;

    const newItem = {
        id: id,
        title: title,
        price: price,
        category: category
    }

    db.push(newItem);

    res.json({
        success: true,
        data: newItem,
        message: 'New food items fetched successfully'
    })
})


app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})