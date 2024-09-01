import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div className="gallery">
            <article><Link to={"menu?category=pizza"}>Pizza</Link></article>
            <article><Link to={"menu?category=sushi"}>Sushi</Link></article>
            <article><Link to={"menu?category=wine"}>Wine</Link></article>
        </div>
    )
}