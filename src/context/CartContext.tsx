import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import localforage from "localforage";
import { Product } from "../types/Product";
import { CartContextType } from "../types/CartContextTypes";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error('useCart must be used with cart Provider');
    }
    return context;
};


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

//useEffect for first render for load cart from indexdb and async ret. data from it 
useEffect(() => {
    const loadCart = async () => {
      const storedCart = await localforage.getItem<Product[]>('cart');
      if (storedCart) {
        setCart(storedCart);
      }
    };
    loadCart();
  }, []);

 
// useeffect runs when cart state changes
  useEffect (() => {
    const saveCart =  async () => {
        await localforage.setItem('cart',cart);
    };
    saveCart();
  },[cart]);
  
// add the product to cart by state updating
  const addToCart = async (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localforage.setItem('cart', updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = async (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      localforage.setItem('cart', updatedCart);
      return updatedCart;
    });
  };

  // clear the cat by  setting state to empty array

  const clearCart = async () => {
    setCart([]);
    await localforage.removeItem('cart');
  };

  return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
        { children }
    </CartContext.Provider>
  )

};