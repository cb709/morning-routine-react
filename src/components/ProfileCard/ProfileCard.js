import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import photo from "../../../src/profile-image.jpg";
import "./ProfileCard.css";


const ProfileCard = () => {
  return (
    <div>
      <div className="profile-card border rounded">
        <img src={photo} alt="" />
        <div className="profile-data">
          <h3>Chinmoy Biswas</h3>
          <p> <FontAwesomeIcon icon={faHouse} />  Gulshan, Dhaka </p>
        </div>
      </div>
      <div className="properties">
        <div><small>Age</small> <br/>26</div>
        <div><small>Height</small> <br/>5.4''</div>
        <div><small>Weight</small> <br/>52<small><strong>kg</strong></small> </div>
      </div>
    </div>
  );
};

export default ProfileCard;
