import './css/shopCategory.css'
import drop_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/item'
import { ShopContext } from '../context/shopcontext'
import { useContext } from 'react'


export default function ShopCategory(props) {
  const {all_products}= useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span>Out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={drop_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_products.map((item, i)=>{
          if(props.category === item.category){
             return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>

    </div>
  )
}
