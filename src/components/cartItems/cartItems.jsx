import React, { useContext } from 'react'
import './cartItems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../../context/shopcontext'

export default function CartItems() {
    const{getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext)
    
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if (cartItems[e.id] > 0)
                { return <div>
                    <div className="cartItems-format cartItems-format-main">
                    <img className='carticon-producticon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>₦{e.new_price}</p>
                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                    <p>₦{e.new_price*cartItems[e.id]}</p>
                    <img className='cartItem-remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
                </div>
                <hr />
                </div>
                
            }
            return null;
        })}
        <div className="cart-down">
            <div className="cartItem-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItem-totalItem">
                        <p>Subtotal</p>
                        <p>₦{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItem-totalItem">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItem-totalItem">
                        <p>Total</p>
                        <p>₦{getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItem-promo-code">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartItem-promo-box">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
