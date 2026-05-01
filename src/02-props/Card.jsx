import React from "react";
import "./Card.css";

const Card = (adName) => {
  console.log(adName);

  return (
    <div className="card">
      <img
        src={adName.image}
        alt=""
      />
      <h1 className="h1">{adName.ad}</h1>
      <span>Price: {adName.price}</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </p>
      <button>View details</button>
    </div>
  );
};

export default Card;
