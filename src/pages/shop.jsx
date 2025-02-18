import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import Newcollections from '../components/newcollections/newcollections'
import Newsletter from '../components/newsletter/newsletter'

export default function Shop(){
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter />
    </div>
  )
}
