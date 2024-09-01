import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import {nanoid} from "nanoid";
import { FaCartShopping } from "react-icons/fa6";
import { useMenu } from "./cartContext";
// import databaseMenu from "./db.json";
type Cart={
    id: string,
    img: string, 
    ammount: number, 
    name: string, 
    price: number
}
type Menu={
	id: string,
	category: string,
	name: string,
	img: string,
	desription: string,
	bestseller: boolean,
	price: number
}
const menuDetail: Menu[]=[
{
	id: "1",
	category: "pizza",
	name: "Neapolitan Pizza",
	img: "/pizza/3.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 10.5
},
{
	id: "2",
	category: "pizza",
	name: "New York Style Pizza",
	img: "/pizza/4.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 11.5
},
{
	id: "3",
	category: "pizza",
	name: "Margherita Pizza",
	img: "/pizza/5.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 9.5
},
{
	id: "4",
	category: "pizza",
	name: "Sicilian Pizza",
	img: "/pizza/6.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 12.5
},
{
	id: "5",
	category: "pizza",
	name: "Hawaiian Pizza",
	img: "/pizza/7.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 11.5
},
{
	id: "6",
	category: "sushi",
	name: "California roll",
	img: "/sushi/1.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 15.5
},
{
	id: "7",
	category: "sushi",
	name: "Philadelphia roll",
	img: "/sushi/4.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 15.5
},
{
	id: "8",
	category: "sushi",
	name: "Salmon roll",
	img: "/sushi/5.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 17.5
},
{
	id: "9",
	category: "sushi",
	name: "Avocado Sushi Rolls",
	img: "/sushi/9.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 14.5
},
{
	id: "10",
	category: "sushi",
	name: "Shrimp tempura roll",
	img: "/sushi/10.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 18.5
},
{
	id: "11",
	category: "wine",
	name: "Pinot grigio",
	img: "/wine/1.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 25.5
},
{
	id: "12",
	category: "wine",
	name: "Chardonnay",
	img: "/wine/2.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 26.5
},
{
	id: "13",
	category: "wine",
	name: "Merlot",
	img: "/wine/4.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 27.5
},
{
	id: "14",
	category: "wine",
	name: "Cabernet sauvignon",
	img: "/wine/5.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 24.5
},
{
	id: "15",
	category: "wine",
	name: "Pinot noir",
	img: "/wine/8.jpg",
	desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	bestseller: false,
	price: 23.5
}
]


export default function MenuDetails(){    
    const {menu}=useMenu();
    const {idi}=useParams();   
    const {cart,setCart}=useMenu();
    const [menuDetails,setMenuDetails]=useState<Menu | null>(null); 
    // const [details,setDetails]=useState<menuDetail>();
    const [data,setData]=useState(1);
    useEffect(()=>{
            if(typeof idi==="undefined"){
                return;
            } 
            else {
				setMenuDetails(menuDetail[Number(idi)-1])
			}
    },[idi])
	if(!menuDetails){
		return <h1>Loading...</h1>
	}
    function handleMinus(){
        setData(prev=>{
            if(prev<=1){
                return prev=1;
            } else return prev-1;
        })
    }
    console.log(idi, menuDetails)
    function handlePlus(){
        setData(prev=>{
            if(prev>=10){
                return prev=10;
            } else return prev+1;
        })
    }
    function handleAddCart(menuDetails: Menu){
        // if(typeof details === "undefined"){
        //     return;
        // }else {
        
        let cartItem: Cart= {
            id: nanoid(), 
            img: menuDetails.img, 
            ammount: data, 
            name: menuDetails.name, 
            price: menuDetails.price
        };
        if(cart.some(item=>item.name==menuDetails.name)){
            setCart(prev=>prev.map(item=>item.name==menuDetails.name ? {...item, ammount: item.ammount + data} : item))
        } else
        setCart(prev=>[...prev, cartItem]);
    }
    return(
        <section className="details-container">
            <div className="details-img">
                <img src={menuDetails.img} alt={menuDetails.name}></img>
            </div>
            <div className="details-information">
                <div className="details-description">              
                    <h2 className="product-name">{menuDetails.name}</h2>
                    <p className="product-description">{menuDetails.desription}</p>
                    <p className="product-price">$ {(Number(menuDetails.price)*data).toFixed(2)}</p>
                </div>
                <div className="counter-container">
                    <div onClick={handleMinus} className="counter">-</div>
                    <div className="counter-value">{data}</div>
                    <div onClick={handlePlus} className="counter">+</div>
                </div>
                <button onClick={()=>handleAddCart(menuDetails)}><FaCartShopping />ADD TO CART</button>
            </div> 
        </section>
    )
}