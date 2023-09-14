import { useEffect, useState } from "react";
export const Toast = ({HandleToggleToast, cart, updateCartItemQuantity}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate the total cost
        const newTotal = cart.reduce((acc, item) => {
          return acc + item.quantity * item.harga;
        }, 0);
      
        // Update the total state
        setTotal(newTotal);
      }, [cart]);
      
    const incrementQuantity = (itemId) => {
        updateCartItemQuantity(itemId, 1); // Increase quantity by 1
      };
      
      const decrementQuantity = (itemId) => {
        updateCartItemQuantity(itemId, -1); // Decrease quantity by 1
      };
      
      
    return (
    <section className={`w-50 position-absolute vh-100 end-0 shadow bg-white z10 overflow-scroll `}>
        <div className="container">
            <nav className="navbar z10 py-1 bg-subtle position-relative d-flex flex-row">
                <div className="container">
                    <button className="p-2" onClick={ HandleToggleToast }>X</button>
                </div>
            </nav>
            {cart && cart.map((item) => (
                    <div className="bg-subtle" key={item.id}>
                        <div>
                            <img src={item.gambar}/>
                            <div>
                                <p>{item.nama}</p>
                                <p>{item.harga}</p>
                                <p>Mantap</p>
                            </div>
                            <div className="counter">
                                <button onClick={() => decrementQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        </div>
                        <input />
                    </div>        
                ))
            }
        <div className="d-flex flex-row bg-dark-subtle justify-content-between ">
            <p>Total</p>
            <p>{total}</p>
        </div>
        </div>

    </section>
  )
}
