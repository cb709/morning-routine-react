import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import ActivitiesData from '../ActivitiesData/ActivitiesData';

const Main = () => {
    const [totalTime, setTotalTime] = useState(0)
    const updateTime = (time) => {
        setTotalTime(totalTime + time)
    }
    return (
        <div className="container main py-3">
            <Activities updateTime={updateTime}></Activities>
            <ActivitiesData time={totalTime}></ActivitiesData>
        </div>
    );
};

export default Main;