import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    
    const [activities, setActivities] = useState([])

    useEffect(()=> {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])


    return (
        <div className='activities-container'>
            {
                activities.map(activity => <Activity key={activity['_id']} activity={activity}></Activity>)
            }
        </div>
    );
};

export default Activities;