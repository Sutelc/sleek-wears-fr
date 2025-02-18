import './productDisplay.css'
import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopcontext';

export default function ProductDisplay(props) {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  // console.log(addToCart)
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img src={product.image} alt="" className="product-display-main-img" />
        </div>
      </div>
      <div className="product-display-right">
       <h1>{product.name}</h1>
       <div className="product-display-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>122</p>
       </div>
       <div className="product-display-right-prices">
        <div className="product-display-right-price-old">₦{product.old_price}</div>
        <div className="product-display-right-price-new">₦{product.new_price}</div>
       </div>
       <div className="product-display-right-description">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown  printer took a galley of type and scrambled it to make a type specimen book.
       </div>
       <div className="product-display-right-size">
        <h1>Select size</h1>
        <div className="product-display-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-display-right-category"><span>Category: </span>Women, T-shirt, Crop-top</p>
        <p className="product-display-right-category"><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
  )
}
