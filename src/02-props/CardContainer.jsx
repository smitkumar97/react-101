import React from "react";
import "./Card.css";
import Card from "./Card";

const CardContainer = () => {
  const items = [
    {
      ad: "Iphone",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1608547492981-3327ee04cafd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      ad: "Mackbook",
      price: 250000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    {
      ad: "Apple Watch",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1645162271565-e8d4e66aea7b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="parent">
      {items.map((item) => { 
        return <Card ad={item.ad} price={item.price} image={item.image} />;
      })}
    </div>
  );
};

export default CardContainer;
