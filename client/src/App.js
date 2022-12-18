import React, {useState} from  'react'
import axios from 'axios'

function App() {
     
  const [foodItems, setFoodItems] = useState([])
  //api req
  async function loadData() {
    const response = await axios.get('/food-items-by-category?category=lunch')
    console.log(response.data.data)
    setFoodItems(response.data.data)
  }


  return (
    <div>
      <h1>Food API</h1>
      <button onClick={loadData}>Make API Call</button>
      {
        foodItems.map((item)=>{
          return (<h1>{item.title}</h1>)
        })
      }
    </div>
  )
}

export default App