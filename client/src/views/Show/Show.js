import React, { useState } from 'react'
import FoodItemCard from '../../component/FoodItemCard/FoodItemCard'
import "./Show.css"

function Show() {

    const [foodItems, setFoodItems] = useState([
        {
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
        },
        {
            id: 3,
            title: 'Biryani',
            price: 200,
            category: 'lunch'
        }
    ])
    return (
        <div>
            <h1>Show All Food Items</h1>
            {
                foodItems.map((item) => {
                    return (<FoodItemCard 
                             id={item.id} 
                             title={item.title} 
                             category={item.category}
                             price={item.price}/>)
                })
            }
        </div>
    )
}

export default Show