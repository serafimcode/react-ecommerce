import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {
  },
  cartItems: [],
  addItemToCart: () => {
  },
  removeItemFromCart: () => {
  },
  clearItemFromCart: () => {
  },
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    let updatedCartItems = [...cartItems];
    const existedItem = updatedCartItems.find(item => item.id === productToAdd.id);
    if (existedItem) {
      existedItem.quantity++;
    } else {
      updatedCartItems.push({ ...productToAdd, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  }


  const removeItemFromCart = (productToRemove) => {
    let updatedCartItems = [...cartItems];
    const existedItem = updatedCartItems.find(item => item.id === productToRemove.id);
    if (existedItem.quantity > 1) {
      existedItem.quantity--;
    } else {
      updatedCartItems = updatedCartItems.filter(item => item.id !== productToRemove.id);
    }
    setCartItems(updatedCartItems);
  }


  const clearItemFromCart = (itemToRemove) => {
    let updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>;
};