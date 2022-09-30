import React, { useState } from "react";
import "./Activity.css";

const Activity = ({activity, updateTime}) => {
  // console.log(props);
  const { name, picture, time, about, isActive } = activity;
  const [disable, setDisable] = useState(isActive)
  // console.log(disable)
  const updateButton = () => {
    if(!disable) {
      setDisable(true)
    }
    // console.log(disable)
  }
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
        <p className="mb-1 mt-1 requiredTime">
          <strong>Time: {time} min </strong>
        </p>
        <button onClick={()=> {updateTime(time); updateButton()}} className="btn activity-btn" disabled={disable ? true : false}>{ disable ? 'Added' : 'Add to List'}</button>
      </div>
    </div>
  );
};

export default Activity;
