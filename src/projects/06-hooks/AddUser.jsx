import React, { useState } from "react";

const AddUser = ({ resourceType, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resourceType === "users") {
      const newUser = { name, email };
      onAddUser(newUser);
      setName("");
      setEmail("");
    } else {
      alert("Please switch to 'Users' to add a new user");
    }
  };

  return (
    <div className="h-full bg-gray-900 flex flex-col justify-center items-center py-10 px-10">
      <h1 className="text-2xl font-bold text-amber-300 underline border-amber-300">
        Add User
      </h1>
      <form
        className="mt-4 flex flex-col gap-4 w-full max-w-sm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
