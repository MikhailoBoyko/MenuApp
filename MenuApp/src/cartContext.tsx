import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
type ChildrenProps={
    children: ReactNode
}
type Cart={
    id: string,
    img: string, 
    ammount: number, 
    name: string, 
    price: number
}
type PropsMenu={
    cart: Cart[],
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>,
    start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,
    menu: Menu[],
    setMenu: React.Dispatch<React.SetStateAction<Menu[]>>,
    handleDelete:(id: string)=>void,
    handleStart:()=>void
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

const CartContext=createContext({} as PropsMenu)
export function useMenu(){
    return useContext(CartContext)
}
export function CartProvider({children}:ChildrenProps){           
    const [cart,setCart]=useState<Cart[]>(JSON.parse(localStorage.getItem("cart")!) || []);
    const [start,setStart]=useState<boolean>(false);
    const [menu,setMenu]=useState<Menu[]>([]);
    useEffect(()=>{
        fetch("/db.json")
        .then(res=>res.json())
        .then(data=>setMenu(data.menu))
    },[]);
    useEffect(()=>{
       localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    function handleDelete(id: string){
        setCart(prev=>prev.filter(item=>item.id!=id));
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    function handleStart(){
        setStart(prev=>!prev);
    }
    return(
        <CartContext.Provider value={{cart,setCart,start,setStart,menu,setMenu,handleDelete,handleStart}}>
            {children}
        </CartContext.Provider>
    ) 
}