import { useState } from "react";
import Gallery from "./Gallery";
import React from 'react';
export default function About(){
    const [open,setOpen]=useState(false)
    return(
        <section className="about-container">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime asperiores molestias omnis dolorum consequuntur vero, excepturi velit nihil hic reprehenderit officiis distinctio iure obcaecati et quos, facilis voluptate nostrum?
            Officia voluptas unde sint magni exercitationem cupiditate dolorem, harum quidem optio ex quod accusamus recusandae delectus soluta praesentium consequuntur eum, commodi esse quam a maiores repudiandae odio nisi reprehenderit! Aliquid.
            Et architecto laboriosam impedit quo itaque praesentium, voluptatibus nobis ad exercitationem sunt officiis, velit, ducimus beatae eveniet quis rerum adipisci. Tempora ad praesentium pariatur dolores ipsam animi dolore minima a!
            </p>
            <button className="open-gallery" onClick={()=>setOpen(true)}>Open Gallery</button>
            {open && <Gallery open={open} setOpen={setOpen} />}
        </section>
    )
}