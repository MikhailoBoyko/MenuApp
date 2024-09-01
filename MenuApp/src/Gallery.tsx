import React from 'react';
import { useState,useEffect } from "react";
import { FaCircleLeft,FaCircleRight } from "react-icons/fa6";
type Image={
        id: number,
        name: string,
        img: string
}
type OpenProps={
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Gallery({open,setOpen}:OpenProps){
    const [count,setCount]=useState<number>(0);
    const [image,setImage]=useState<Image[]>([]);
    function handleLeft(){
       if(count==0){
            setCount(image.length-1)
        } else setCount(prev=>prev-1)
        }
    function handleRight(){ 
        if(count>=image.length-1){
            setCount(0)
        
        }else setCount(prev=>prev+1)
    }
    useEffect(()=>{
        fetch("/db1.json")
        .then(res=>res.json())
        .then(data=>setImage(data.gallery))
    },[])
    return(
        <div className="overlay">
            <section className="slider">
                <div style={{transform: `translateX(-${count * 100}%)`}}>
                    {image.map((item,index)=><article key={item.id} style={{transform: `translateX(${index * 100}%)`}}><img src={item.img} /></article>)}
                    </div>
                <button className="minus" onClick={handleLeft}><FaCircleLeft /></button>
                <button className="plus" onClick={handleRight}><FaCircleRight /></button>
                <span onClick={()=>setOpen(false)} className="close-btn">X</span>
            </section>
            
        </div>
    )
}