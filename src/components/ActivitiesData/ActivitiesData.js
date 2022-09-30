import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import TimeRequired from "../TimeRequired/TimeRequired";
import TimeSpending from "../TimeSpending/TimeSpending";
import './ActivitiesData.css'

const ActivitiesData = ({time}) => {
  return (
    <div className="activities-data-container border rounded">
      <ProfileCard></ProfileCard>
      <div className="mt-2">
        <h3 className="mb-1">Take A Break</h3>
        <TimeSpending></TimeSpending>
      </div>
      <div className="mt-2">
        <h3 className="mb-1">Total Time</h3>
        <TimeRequired time= {time}></TimeRequired>
      </div>
      <button className="btn complete-btn">All Completed</button>
    </div>
  );
};

export default ActivitiesData;
