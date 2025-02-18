import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../context/shopcontext'
import Breadcrum from '../components/breadcrum/breadcrum';
import ProductDisplay from '../components/productDisplay/productDisplay';
import DescriptioBox from '../components/descriptionBox/descriptioBox';
import RelatedProduct from '../components/relatedProduct/relatedProduct';

export default function Products() {
  const {all_products}= useContext(ShopContext);
  const {productId}=useParams()
  const product = all_products.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptioBox/>
      <RelatedProduct/>

    </div>
  )
}

