"use client"
import { useState } from "react";

import { BASE_URL } from "@src/config";
import View from "@src/components/view";

export default function Button() {
    const [date, setDate] = useState(null);
    const handleClick = async () => {
        console.log("BASE_URL", BASE_URL);
        const response = await fetch(`${BASE_URL}/api`);
        const data = await response.json();
        setDate(data.date);
    };
    return (
        <div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
            Fetch Date
        </button>
        {date ? <View date={date} /> : null}
        </div>
        );
}