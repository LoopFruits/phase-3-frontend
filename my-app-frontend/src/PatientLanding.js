import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Appointment from "./Appointment"

function PatientLanding({user,handleAppSubmit, onDeleteAppointment}) {


    //console.log(user.id)

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
         fetch(`http://localhost:9292/appointments`)
           .then((r) => r.json())
           .then((data) => setAppointments(data));
       }, []);

       const userAppointments = appointments.filter(appointment => appointment.patient_id === user.id)
       console.log(userAppointments)
       const userAppointmentsList = userAppointments.map((userAppointment) => (
            <Appointment key={userAppointment.id} userAppointment={userAppointment} onDeleteAppointment={onDeleteAppointment}></Appointment> 
       ))

       

        function onDeleteAppointment(deletedAppointment){
         const updatedAppointments = userAppointmentsList.filter((appointment)=>appointment.id !== deletedAppointment)
         setAppointments(updatedAppointments)
    }

    return (
        <div className="body-1">
            <h1>Welcome {user.first_name}</h1>
            <div>
                <button className="sched-btn" onClick={handleAppSubmit}>Schedule Appointment</button>
            </div>
            <div>
                <Link to="/edit-patient" ><button className="edit-btn" >Edit Information</button></Link>
            </div>
            <div className="appointments">
                <h2 className="appointment-header" >Upcoming Appointments</h2>
                <span>{userAppointmentsList}</span>
               {/* {userAppointments.map(appointment => <ul className="appointments"> Appointment Date: {appointment.appt_date}<br></br> Physician: {appointment.physician.first_name} {appointment.physician.last_name}</ul>)} */}
            </div>
        </div>
    )

}

export default PatientLanding;