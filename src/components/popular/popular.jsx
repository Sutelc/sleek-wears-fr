import React, { useEffect, useState } from 'react'
import './popular.css'
import Item from '../item/item'

export default function Popular() {
  const [popular_product, setPopular_product]= useState([]);

  useEffect(()=>{
    fetch('https://sleek-wear-backend.onrender.com/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopular_product(data))
  }, [])
  return (
    <>
    <div className="popular">
    <h1 >POPULAR IN WOMEN</h1>
    <hr />
        <div className="popular-item">
            {popular_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
   
    </div>
    </>
    
  )
}
