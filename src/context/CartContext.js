import { createContext, useState } from "react";
export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    console.log(cart)

   const addItem = (item, quantity) => {
    if (!IsInCart (item.id)){
        setCart(prev =>[...prev, {...item,quantity}])
    }else{
        console.error('El producto ya fue agregado al carrito')
    }
   }
   const removeItem =(itemId) => {
    const cartUpdated = cart.filter(productos => productos.id !== itemId)
    setCart(cartUpdated)
   }
        const clearCart =() => {
            setCart([])
        }
    
        const IsInCart = (itemId) => {
            return cart.some(productos => productos.id === itemId)
        }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

