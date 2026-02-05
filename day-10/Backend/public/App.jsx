import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [isediting, setIsediting] = useState(false)
  const [editingProductID, setEditingProductID] = useState(null)
  const [isOpenForm, setIsOpenForm] = useState(false)


  function submitHandler(e) {

    e.preventDefault();
    const { name, price, category, imageUrl, description, stock } = e.target.elements;
    if (isediting) {
      axios.patch(`https://backend-series-1.onrender.com/${editingProductID}`, {

        name: name.value,
        price: price.value,
        category: category.value,
        imageUrl: imageUrl.value,
        description: description.value,
        stock: stock.value
      })
        .then((result) => {

          fetchProduct()
          setIsediting(false)
          setEditingProductID(null)
          e.target.reset()
           setIsOpenForm(false) 
        })

    }
    else {



      axios.post("https://backend-series-1.onrender.com/api/products", {
        name: name.value,
        price: price.value,
        category: category.value,
        imageUrl: imageUrl.value,
        description: description.value,
        stock: stock.value
      })
        .then((result) => {
          fetchProduct();
          e.target.reset()
           setIsOpenForm(false) 

        })
    }

  }



  function fetchProduct() {
    axios.get("https://backend-series-1.onrender.com/api/products")
      .then((result) => {
        setProducts(result.data.products)

      })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  function clickHandler(productId) {
    axios.delete(`https://backend-series-1.onrender.com/api/products/${productId}`)
      .then((result) => {
        fetchProduct()
      })

  }

  function editHandler(product) {
    setIsediting(true)
    setEditingProductID(product._id)
   setIsOpenForm(true) 

   setTimeout(() => {
     document.querySelector('input[name="name"]').value = product.name
    document.querySelector('input[name="price"]').value = product.price
    document.querySelector('input[name="category"]').value = product.category
    document.querySelector('input[name="stock"]').value = product.stock
    document.querySelector('input[name = "description"]').value = product.description
    document.querySelector('input[name="imageUrl"]').value = product.imageUrl
   }, 0);
   





  }

  return (
    <div className='full-page'>

     <div className="main-btn">
     <div className="heading">
       <h1>Manage Your Products</h1>
       
     </div>
       <button type='button' onClick={() => {
        setIsOpenForm(true)
      }} >Add Products</button>
 

     </div>

      {isOpenForm && (
        <div className="overlay" onClick={()=>setIsOpenForm(false)} >
        <div className="form-sec"onClick={(e)=>e.stopPropagation()}>
          <form className='form' onSubmit={submitHandler}>
            <input type="text" name="name" placeholder='Product Name' />
            <input type="text" name="price" placeholder='price' />
            <input type="text" name="category" placeholder='Product Category' />
            <input type="text" name="description" placeholder='Product Description' />
            <input type="text" name="stock" placeholder='Product Stock' />
            <input type="text" name="imageUrl" placeholder='Product Image URL' />
            <button  >{isediting ? "Update Product" : "Add Product"} </button>
            
          </form>
        </div>
        </div>
      )}


      <div className='product-list'>

        {products.map((product, idx) => {

          return <div key={idx} className='product'>
            <img src={product.imageUrl} alt="" />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <h3> Stock - {product.stock}</h3>
            <p>{product.description}</p>


            <div className="btn">
              <button onClick={() => {
                clickHandler(product._id)
              }}>Remove Product</button>
              <button onClick={() => {
                editHandler(product)
              }}>Edit</button>
            </div>


          </div>
        })}




      </div>
    </div>
  )
}

export default App