import React from 'react';
import { Link } from 'react-router-dom';
function PhysicianLanding() {


    return (
        <div className="body-1">
        <h1>Welcome</h1>
        <div>
            <button className="sched-btn">Schedule Appointment</button>
        </div>
        <div>
            <Link to="/edit-physician" ><button className="edit-btn">Edit Information</button></Link>
        </div>
    </div>
    )


}

export default PhysicianLanding;