import React from "react";
import "./Activity.css";

const Activity = (props) => {
  console.log(props);
  const { name, picture, time, about } = props.activity;
  return (
    <div className="activity border rounded">
      <div>
        <img className="rounded" src={picture} alt="" />
        <div className="px-1">
        <h3 className="mb-1">{name}</h3>
        <p>{about.slice(0, 70)}</p>
        </div>
      </div>
      <div>
        <p className="mb-1 mt-1">
          <strong>Time: {time} min </strong>
        </p>
        <button className="btn activity-btn">Add To List</button>
      </div>
    </div>
  );
};

export default Activity;
