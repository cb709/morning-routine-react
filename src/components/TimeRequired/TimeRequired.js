import React from 'react';
import './TimeRequired.css'

const TimeRequired = () => {
    return (
        <div>
            <div className="time rounded border"> <p>Time Needed: <strong>30 min</strong></p> </div>
            <div className="time rounded border"> <p>Break Time: <strong>10 min</strong></p> </div>
        </div>
    );
};

export default TimeRequired;