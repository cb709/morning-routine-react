import React, { useState } from "react";
import { setToLocalStorageByKey } from "../../Utilites/utilities";
import "./Activity.css";

const Activity = ({activity, addTime, decreaseTime}) => {
  // console.log(props);
  const { name, picture, time, about, isActive } = activity;
  const [disable, setDisable] = useState(isActive)

  const updateButton = () => {
    if(!disable) {
      setDisable(true)
    } else {
      setDisable(false)
    }
    setToLocalStorageByKey(name, !disable)
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
        <button onClick={()=>{
          if (!disable) {
            addTime(time); 
            updateButton()
          }else{
            decreaseTime(time); 
            updateButton()
          }
        }} className={ disable ? "btn activity-btn added" : "btn activity-btn"}>{ disable ? 'Remove' : 'Add to List'}</button>
      </div>
    </div>
  );
};

export default Activity;
