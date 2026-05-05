import React from "react";
import CardContent from "./CardContent";

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
      <img
        src={props.img}
        alt="Landscape"
        className="h-full w-full object-cover rounded-4xl"
      />
      <CardContent id={props.id} color={props.color} tag={props.tag} />
    </div>
  );
};

export default RightCard;
