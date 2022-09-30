import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import ActivitiesData from '../ActivitiesData/ActivitiesData';

const Main = () => {
    const [totalTime, setTotalTime] = useState(0)
    const addTime = (time) => {
        setTotalTime(totalTime + time)
    }
    const decreaseTime = (time) => {
        setTotalTime(totalTime - time)
    }
    return (
        <div className="container main py-3">
            <Activities addTime={addTime} decreaseTime={decreaseTime}></Activities>
            <ActivitiesData time={totalTime}></ActivitiesData>
        </div>
    );
};

export default Main;