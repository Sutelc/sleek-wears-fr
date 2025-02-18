import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

// const getDefaultCart = (products) => {
//   let cart = {};
//   products.forEach(product => {
//     cart[product.id] = 0; // Initialize each product's quantity as 0
//   });
//   return cart;
// };
// Initialize cartItems as an empty object (or an empty array if needed)
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
     cart[index] = 0;
    
  }
  return cart; // Cart will start as an empty object
};
export default function ShopContextProvider(props) {


  // const loadCartItems = () => {
  //   const savedCart = localStorage.getItem('cartItems');
  //   if (savedCart) {
  //     return JSON.parse(savedCart); // Parse saved cart from localStorage
  //   } else {
  //     return getDefaultCart(); // Use default cart if no saved cart is found
  //   }
  // };



  const [cartItems, setCartItems] = useState(getDefaultCart()); // Set cartItems as an object with quantities for each product
  const [all_products, setAll_Products]= useState([]); 
  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Products(data))

    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcartdata', {
        method: "POST",
        headers: {
          Accept: "application/form-data", 
          "auth-token": `${localStorage.getItem('auth-token')}`,
          "Content-Type": 'application/json'
        },
        body: "",
      }).then((response)=>response.json())
      .then((data)=>setCartItems(data))
    }

  }, []);
  

  // Function to add an item to the cart
  const addToCart = (itemId) => {
  setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart', {
          method: "POST",
          headers: {
            Accept: "application/form-data", 
            "auth-token": `${localStorage.getItem('auth-token')}`,
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({"itemId": itemId})
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert("Item added to cart " + data.message);
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          alert("There was an error while adding the item to your cart.");
        });
        
      }

      
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      newCartItems[itemId] = Math.max(0, newCartItems[itemId] - 1); // Prevent negative quantities
      return newCartItems;
    });
    if (localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart', {
        method: "POST",
        headers: {
          Accept: "application/form-data", 
          "auth-token": `${localStorage.getItem('auth-token')}`,
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({"itemId": itemId})
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert("Item added to cart " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        alert("There was an error while adding the item to your cart.");
      });
    }
  };

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = all_products.find((product)=>product.id===Number(item))
        
        totalAmount += itemInfo.new_price * cartItems[item];  
      } 
    }
    return totalAmount
  }

const getTotalCartItems = ()=>{
  let totalItem = 0
  for(const item in cartItems ){
    if(cartItems[item]>0){
      totalItem += cartItems[item];
    }
  }
  return totalItem
}

  const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
