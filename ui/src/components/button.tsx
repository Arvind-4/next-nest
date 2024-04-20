"use client";
import { useState } from "react";

import { BASE_URL } from "@src/config";
import View from "@src/components/view";

export default function Button() {
  const [date, setDate] = useState(null);
  const handleClick = async () => {
    const response = await fetch(`${BASE_URL}/date`);
    const data = await response.json();
    setDate(data.date);
  };
  return (
    <div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        Fetch Date
      </button>
      {date ? <View date={date} /> : null}
    </div>
  );
}
