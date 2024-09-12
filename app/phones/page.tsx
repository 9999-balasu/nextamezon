
"use client"
import React, { useState } from "react"

interface DataType {
    id: number;
    image: string;
}

const mockData: DataType[] = [
    {
        id: 1,
        image: "https://tse1.mm.bing.net/th?id=OIP.JcFjJDEoh7vNNcaLSKQu7wHaDu&pid=Api&P=0&h=180"
    },
    {
        id:2,
        image:"https://tse3.mm.bing.net/th?id=OIP.9Ju6EPwPRgdBw7FUG6npjgHaET&pid=Api&P=0&h=180"
    }

]

export default function Phones() {
    const [data, setData] = useState<DataType[]>(mockData);

    return (
        <div>
            <h1>Phones</h1>
            {data.map(item => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <img src={item.image} alt={`Phone ${item.id}`} />
                </div>
            ))}
        </div>
    )
}
