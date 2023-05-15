import { createContext, useState } from "react";
export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    

   const addItem = (item, quantity) => {
    if (!IsInCart (item.id)){
        setCart(prev =>[...prev, {...item,quantity}])
    }else{
        console.error('El producto ya fue agregado al carrito')
    }
   }
   const removeItem =(ItemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== ItemId)
    setCart(cartUpdated)
   }
        const clearCart =() => {
            setCart([])
        }
    
        const IsInCart = (ItemId) => {
            return cart.some(prod => prod.id === ItemId)
        }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

