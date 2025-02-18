
import React, { useContext, useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo12.png'
import { BsCart4 } from "react-icons/bs";
import { ShopContext } from '../../context/shopcontext'
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");

    }
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark menubar'>
        <div className="nav-logo">
           <Link to='/'> <img className='brand-logo' src={logo} alt="" /></Link> 
        </div>
        <div className='nav-dropdown' onClick={dropdown_toggle}><CiMenuBurger /></div>
        <ul  ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none', color:"white"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none', color:"white"}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:"white"}} to='womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:"white"}} to='kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/');}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
        <Link className='cart-icon'  to='/cart'><BsCart4 /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
