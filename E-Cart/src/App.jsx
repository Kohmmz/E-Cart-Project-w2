import ProductsList from './components/ProductList'

function App() {
  const Products = [

    { "id": 1, "name": "T-Shirt", "price": 20 },

    { "id": 2, "name": "Jeans", "price": 40 },

    { "id": 3, "name": "Sneakers", "price": 60 },

    { "id": 4, "name": "Hat", "price": 15 },

    { "id": 5, "name": "Socks", "price": 5 }

  ]


  return (
    <>
   <ProductsList Products={Products}/>
   

    </>
  )

}

export default App
