import React, { useEffect } from "react";
import { useState } from "react";
import AddUser from "./AddUser";

const DummyJson = () => {
  const [resourceType, setUserType] = useState("users");
  const [data, setData] = useState("");

  const changeResourceType = (type) => {
    setUserType(type);
  };

  const addUserToData = (newUser) => {
    if (resourceType === "users" && data.users) {
      setData({
        ...data,
        users: [...data.users, { ...newUser, id: data.users.length + 1 }],
      });
    }
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/${resourceType}`)
      .then((res) => res.json())
      .then(setData);
  }, [resourceType]);

  return (
    <div className="h-screen bg-gray-900 flex flex-col py-10 px-10 overflow-hidden">
      <h1 className="text-2xl font-bold text-amber-300 underline border-amber-300 text-center">
        Dummy Json
      </h1>
      <div className="mt-4 mb-2 flex flex-row items-center gap-4 justify-center flex-shrink-0">
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
      <div className="mt-4 flex flex-row gap-2 justify-between w-full overflow-auto">
        <div className="text-sm text-gray-300 bg-gray-800 p-4 rounded w-full">
          <AddUser resourceType={resourceType} onAddUser={addUserToData} />
        </div>
        <div className="text-sm text-gray-300 bg-gray-800 p-4 rounded w-full overflow-auto">
          <h2 className="font-bold">
            Count:
            {resourceType === "users"
              ? data.users
                ? data.users.length
                : 0
              : resourceType === "posts"
                ? data.posts
                  ? data.posts.length
                  : 0
                : resourceType === "products"
                  ? data.products
                    ? data.products.length
                    : 0
                  : 0}
          </h2>
          <br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default DummyJson;
