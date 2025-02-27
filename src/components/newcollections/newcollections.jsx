import React, { useEffect, useState } from 'react'
import './newcollections.css'

import Item from "../item/item"

export default function Newcollections() {
  const[newcollections, setNew_Collections]=useState([]);
useEffect(()=>{
 fetch('https://sleek-wear-backend.onrender.com/newcollections')
 .then((response)=>response.json())
 .then((data)=>setNew_Collections(data))
}, [])

  return (
    <>
      <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
      
      <div className="collections-items">
      {newcollections.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} old_price={item.old_price} />
      })}
      </div>
      </div>
  
    </>

  )
}
