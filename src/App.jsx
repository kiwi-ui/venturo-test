import { useState, useEffect } from "react"
import { FetchProduct } from "./sevices/Product";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import './App.css'
function App() {
   const [showToast, setShowToast] = useState(false);
   const [product, setProduct] = useState();
   const [addCart, setAddCart] = useState([]);

   const getProduct = async () => {
      try {
         const { data } = await FetchProduct();
         setProduct(data.datas) 
      } catch (error) {
         console.log(error)
      }
   };
   const HandleToggleToast = () => {
      setShowToast(toggle => !toggle);
      console.log('halo')
   }
   useEffect(() => {
      getProduct()
   }, []);
   const addToCart = (id) => {
      const productToAdd = product.find((food) => food.id === id);
      if (productToAdd) {
         productToAdd.quantity = 1;
         setAddCart([...addCart, productToAdd]);
      }
      setShowToast(true)
   }
   const updateCartItemQuantity = (itemId, change) => {
      const updatedCart = addCart.map((item) => {
        if (item.id === itemId) {
          // Ensure item.quantity is a number by parsing it
          const newQuantity = parseInt(item.quantity, 10) + change;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    
      setAddCart(updatedCart);
    };
    
   return (
      <> 
         { showToast ? <Toast HandleToggleToast={HandleToggleToast} cart = {addCart} updateCartItemQuantity= {updateCartItemQuantity} setAddCart={setAddCart}/> : null }
         <div className={`position-absolute bg-dark bg-opacity-75   w-100 z5 vh-100 ${showToast ? 'd-block' : 'd-none'}`   }></div>
         
         <header>
            <Navbar HandleToggleToast = {HandleToggleToast}/>
         </header>

         <main className="container my-2">
            <div className="row g-md-4 g-3 position-relative ">
               {product && product.map(food => (
                  <div className="col-md-4 col-lg-6" key={ food.id }>
                     <div className="card p-2 shadow rounded-3">
                           <img src={ food.gambar } className="card-img-top mb-2 start-0  position-relative" height={150} alt={ `${food.nama}` } />
                     
                           <div className="card-body bg-primary rounded-bottom-3	text-white">
                              <h5 className="card-title">{ food.nama }</h5>
                              <p className="card-text">{ food.harga }</p>
                              <button onClick={() => addToCart(food.id)}>+ tambahkan ke keranjang</button>
                           </div>
                     </div>
                  </div>
               ))}
            </div>

         </main>
      </>
  )
}

export default App
