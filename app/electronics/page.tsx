"use client"
import React, { useState,useEffect } from 'react'

interface products{
    id:number,
    name:string,
    price:number,
    image:string,
    title:string,
    category:string,
    description:string;
}
export default function Electronics(){
 const[products,setProducts] = useState<products[]>([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>setProducts(json))  
    })
 
    return(

       
        <div>
 
 <h1>Electronic page</h1>
 {
    products.map(item =>
        <div> <h1>{item.title}</h1>
       
        <img src={item.image} height={300}  width={300}/>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
        <h1>{item. category}</h1>
        
       
       
        </div>)
 }

  </div>
       
      
    )

}
