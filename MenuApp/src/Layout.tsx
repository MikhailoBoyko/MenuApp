import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FaFacebook, FaSquareTwitter, FaInstagram, FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";
import {motion} from "framer-motion";
import { CartProvider, useMenu } from "./cartContext";
// type Cart={
//     id: number,
//     img: string, 
//     ammount: number, 
//     name: string, 
//     price: number
// }

export default function Layer(){       
    // const [cart,setCart]=React.useState<Cart[]>(JSON.parse(localStorage.getItem("cart")!) || []);
    // const [start,setStart]=React.useState<boolean>(false);  
    // React.useEffect(()=>{
    //    localStorage.setItem("cart",JSON.stringify(cart))
    // },[cart])
    // function handleDelete(id: string){
    //     setCart(prev=>prev.filter(item=>item.id!=id));
    //     localStorage.setItem("cart",JSON.stringify(cart))
    // } 
    // console.log(localStorage.getItem("cart"))
    const {cart,handleStart}=useMenu();
    const {start, menu}=useMenu();
    console.log(start)
    
    return(
        <div className="container">
            <header>
                <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: .5 }}>
                    Restaurant Menu</motion.h1>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="menu">Menu</NavLink></li>
                        <li><NavLink to="about">About</NavLink></li>
                    </ul>
                </nav>
                <div className="starter">
                    <div className="starter-button" onClick={handleStart}>
                        <FaCartShopping />
                        <span className="cart-count">{cart.reduce((tot,item)=>tot+item.ammount,0)}</span>
                    </div>
                </div>
            </header>
            <motion.main
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: .5 }}>
                {/* <Outlet context={menu} /> */}
                <Outlet />
            </motion.main>
            <footer>
                <ul>
                    <li><Link to=""><FaFacebook /></Link></li>
                    <li><Link to=""><FaSquareTwitter /></Link></li>
                    <li><Link to=""><FaInstagram /></Link></li>
                </ul>
            </footer>
            {start && <Cart />}
        </div>
    )
}