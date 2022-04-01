import React from 'react';



function Appointment({userAppointment, onDeleteAppointment}) {

    
  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${userAppointment.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteAppointment(userAppointment))
  }


return (
    <ul className='appointment-card'>
        <div className='details'>
        <h2>Physician Name: {userAppointment.physician.first_name} {userAppointment.physician.last_name}</h2>
        <h3>Appointment Date: {userAppointment.appt_date}</h3>
        <div>
            <button onClick={handleDeleteClick} className="sub-btn">Cancel Appointment</button>
        </div>
        </div>
    </ul>
)

}

export default Appointment;