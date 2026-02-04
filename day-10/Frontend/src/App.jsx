import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])

  function submitHandler(e) {

    e.preventDefault();
    const { name, price, category, imageUrl, description, stock } = e.target.elements;
    axios.post("http://localhost:3000/api/products", {
      name: name.value,
      price: price.value,
      category: category.value,
      imageUrl: imageUrl.value,
      description: description.value,
      stock: stock.value
    })
    .then((result)=>{
      fetchProduct();
      console.log(result)
    })

  }



  function fetchProduct() {
    axios.get("http://localhost:3000/api/products")
      .then((result) => {
        setProducts(result.data.products)

      })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  function clickHandler(productId) {
    axios.delete(`http://localhost:3000/api/products/${productId}`)
      .then((result) => {
        fetchProduct()
      })

  }


  return (
    <div className='full-page'>

      <form className='form' onSubmit={submitHandler}>
        <input type="text" name="name" placeholder='Product Name' />
        <input type="text" name="price" placeholder='price' />
        <input type="text" name="category" placeholder='Product Category' />
        <input type="text" name="description" placeholder='Product Description' />
        <input type="text" name="stock" placeholder='Product Stock' />
        <input type="text" name="imageUrl" placeholder='Product Image URL' />
        <button>Add Product</button>
      </form>
      <div className='product-list'>

        {products.map((product, idx) => {

          return <div key={idx} className='product'>
            <img src={product.imageUrl} alt="product-image" />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <p>{product.description}</p>


            <div className="btn">
              <button onClick={() => {
                clickHandler(product._id)
              }}>Remove Product</button>
            </div>


          </div>
        })}




      </div>
    </div>
  )
}

export default App