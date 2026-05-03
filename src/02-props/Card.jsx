import React from "react";
import "./Card.css";
import { Bookmark } from "lucide-react";

const Card = (jobs) => {
  return (
    <div className="card">
      <div className="top">
        <img src={jobs.brandLogo} alt="" />
        <button>
          Save <Bookmark size={10} />{" "}
        </button>
      </div>
      <div className="center">
        <h3>
          {jobs.company} <span>{jobs.datePosted}</span>
        </h3>
        <h2>{jobs.post}</h2>
        <div className="tag">
          <h4>{jobs.tag1}</h4>
          <h4>{jobs.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{jobs.pay}</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
