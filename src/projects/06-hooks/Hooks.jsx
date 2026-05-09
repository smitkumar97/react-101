import React from "react";
import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState({
    name: "Smit",
    age: 28,
  });

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-row justify-evenly py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-amber-300">Hooks</h1>
        <p className="text-blue-50 font-semibold">Count: {count}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="text-green-500 font-semibold">Name: {otherValue.name}</p>
        <p className="text-green-500 font-semibold">Age: {otherValue.age}</p>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setOtherValue(() => ({ ...otherValue, age: otherValue.age + 1 }))
          }
        >
          Increment Age
        </button>
      </div>
    </div>
  );
};

export default Hooks;
