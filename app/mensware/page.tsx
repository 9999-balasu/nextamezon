

"use client"
import React, { useState } from "react"

interface DataType {
    id: number;
    image: string;
}

const mockData: DataType[] = [
    {
        id: 1,
        image: "https://tse3.mm.bing.net/th?id=OIP.UQYwQDm1WfoW00We8Fig8wHaEK&pid=Api&P=0&h=180"
    },
    {
        id:2,
        image:"https://tse2.mm.bing.net/th?id=OIP.dH2IBYbh9vuyr2-ryPuqxgHaEm&pid=Api&P=0&h=180"
    }

]

export default function Digitals() {
    const [data, setData] = useState<DataType[]>(mockData);

    return (
        <div>
            <h1>Phones</h1>
            {data.map(item => (
                <center>
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <img src={item.image} alt={`Phone ${item.id}`} />
                   
                </div>
                </center>
            ))}
        </div>
    )
}
