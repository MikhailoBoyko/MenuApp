import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMenu } from "./cartContext";
type Menu={
	id: number,
	category: string,
	name: string,
	img: string,
	desription: string,
	bestseller: boolean,
	price: number
}
export default function Menu(){
    const [searchParams,setSearchParams]=useSearchParams();
    const typeFilter=searchParams.get("category");
    const {menu,setMenu}=useMenu();
    const displayItems=typeFilter ? menu.filter(char=>char.category.toLowerCase() === typeFilter) : menu;
    
    // React.useEffect(()=>{
    //     fetch("/db.json")
    //     .then(res=>res.json())
    //     .then(data=>setMenu(data.menu))
    // },[]);
    let arr:string[]=[];
    let newArr:string[]=[];
    menu.map(item=>arr.push(item.category));
    
    newArr=[...new Set(arr)];
    console.log(menu)
    return(
        <section className="menu-container">
        <div className="block-categories">
            <Link to=".">All</Link>
            {newArr.map(item=> <Link key={item} to={`?category=${item}`}>{item}</Link>)}
        </div>
        <div className="menu-items">
            {displayItems && displayItems.map(item=>(<Link to={String(item.id)} key={item.id} className="link-article">                
                <img src={item.img} alt={item.name}></img>
                <div className="item-infomation">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.desription.length > 100 ? `${item.desription.slice(0,100)}...` : item.desription}</p>
                    <p className="item-price">$ {item.price.toFixed(2)}</p>
                </div>
                </Link>))}
        </div>
        </section>
    )
}