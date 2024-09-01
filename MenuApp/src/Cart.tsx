import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { useMenu } from "./cartContext";
// type Cart={
//     id: string,
//     img: string, 
//     ammount: number, 
//     name: string, 
//     price: number
// }

// type CartHolder={
//     cart: Cart[],
//     handleDelete:(id:string)=>void
// }
export default function Cart(){
    const {cart,setCart,handleDelete}=useMenu();
    return(
        <aside className="cart">
            {!cart ? <h2 style={{textAlign: "center", marginBottom: "15px"}}>Cart is empty</h2> : (cart.map(item=>(
                <article key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div className="cart-item-information">
                        <h5>Name: {item.name}</h5>
                        <p>Amount: {item.ammount}</p>
                        <p className="cart-price">Price: $ {(item.ammount*item.price).toFixed(2)}</p>
                    </div>
                    <div className="delete-btn">
                        <div onClick={()=>handleDelete(item.id)}>
                            <FaTrashCan />
                        </div>
                    </div>
                </article>
            )))}
            <p className="cart-total">Total: $ {cart.reduce((tot,item)=>tot+(item.price*item.ammount),0).toFixed(2)}</p>
        </aside>
    )
}