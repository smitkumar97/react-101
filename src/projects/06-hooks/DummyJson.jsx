import React, { useEffect } from "react";
import { useState } from "react";

const DummyJson = () => {
  const [resourceType, setUserType] = useState("users");
  const [data, setData] = useState(null);

  const changeResourceType = (type) => {
    setUserType(type);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/${resourceType}`)
      .then((res) => res.json())
      .then(setData);
  }, [resourceType]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-start py-10 px-10">
      <h1 className="text-2xl font-bold text-amber-300 underline border-amber-300">
        Dummy Json
      </h1>
      <div className="mt-4 flex flex-row items-center gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => changeResourceType("users")}
        >
          Users
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => changeResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => changeResourceType("products")}
        >
          Products
        </button>
      </div>
      <div className="mt-4">
        <pre className="text-sm text-gray-300 bg-gray-800 p-4 rounded overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DummyJson;
