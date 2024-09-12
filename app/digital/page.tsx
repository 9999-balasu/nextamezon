
"use client"
import React, { useState } from "react"

interface DataType {
    id: number;
    image: string;
}

const mockData: DataType[] = [
    {
        id: 1,
        image: "https://tse4.mm.bing.net/th?id=OIP.-6UAxuma3uI-305eetMXIgHaEd&pid=Api&P=0&h=180"
    },
    {
        id:2,
        image:"https://tse1.mm.bing.net/th?id=OIP.yqp-2Kc3aFpDubnPYsNWHgHaEn&pid=Api&P=0&h=180"
    }

]

export default function Digitals() {
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
