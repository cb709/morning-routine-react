import React, { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import TimeRequired from "../TimeRequired/TimeRequired";
import "./ActivitiesData.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivitiesData = ({ time }) => {
  const [breakTime, setBreakTime] = useState(0);

  const updateBreakTime = (time, e, id) => {
    localStorage.setItem("break", time);
    localStorage.setItem("id", id);
    setBreakTime(time);
    let activeBtn = document.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  useEffect(() => {
    const localTime = localStorage.getItem("break");
    const activeBtnId = localStorage.getItem("id");
    let activeBtn = document.getElementById(activeBtnId);
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
    setBreakTime(localTime);
  }, []);
  //toast function
  const notify = () => toast("All Activity Completed");

  const clearData = () => {
    localStorage.clear();
    setBreakTime(0);
    let activeBtn = document.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
  };

  return (
    <div className="activities-data-container border rounded">
      <ProfileCard></ProfileCard>
      <div className="mt-4">
        <h3 className="mb-2">Add Break</h3>
        <div className="break-buttons">
          <button
            className="btn border"
            id="break-1"
            onClick={(e) => updateBreakTime(10, e, "break-1")}
          >
            10
          </button>
          <button
            className="btn border"
            id="break-2"
            onClick={(e) => updateBreakTime(15, e, "break-2")}
          >
            15
          </button>
          <button
            className="btn border"
            id="break-3"
            onClick={(e) => updateBreakTime(20, e, "break-3")}
          >
            20
          </button>
          <button
            className="btn border"
            id="break-4"
            onClick={(e) => updateBreakTime(30, e, "break-4")}
          >
            30
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-1">Total Time</h3>
        <TimeRequired time={time} breakTime={breakTime}></TimeRequired>
      </div>
      <button className="btn complete-btn" onClick={clearData}>
        Clear
      </button>
      <button className="btn complete-btn" onClick={notify}>
        All Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default ActivitiesData;
