import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'

import MedicalBook from './MedicalBook'
import DoctorsVisit from './DoctorsVisit'
import Pharmacy from './Pharmacy'
import LabOrder from './LabOrder'
import Reports from './Reports'
import DoctorsAvailability from './DoctorsAvailability'
import DoctorsAppointment from './DoctorsAppointment'
import Reimburse from './Reimburse'
import Admin from './Admin'

import data from "./data/PatientInfo/PatientData";
import "../../styles/PatientInfo.css";

export default function Home() {
    function StudentInformation(){
        return (
            <div className="patientdet">
                <div className="im">
                    <img src={data.img} alt="profile" />
                </div>
                <div className="container">
                    <div className="name">
                        <h1>{data.name}</h1>
                    </div>
                    <div className="job">
                        <h1>{data.job}</h1>
                    </div>
                    <div className="student">
                        <h1>{data.age}</h1>
                    </div>
                </div>
            </div>
        );
    }

    const [display, changeDisplay] = useState("Student Information")
    return (
        <div>
            <Navbar changeState={changeDisplay} />
            <div className='m-5 dark'>
                {display == "Medical Book" && <MedicalBook />}
                {display == "Doctor's Visit" && <DoctorsVisit />}
                {display == "Pharmacy" && <Pharmacy />}
                {display == "Lab Order" && <LabOrder />}
                {display == "Reports" && <Reports />}
                {display == "Doctor's Availability" && <DoctorsAvailability />}
                {display == "Doctor's Appoinment" && <DoctorsAppointment />}
                {display == "Student Information" && <StudentInformation />}
                {display == "Reimburse" && <Reimburse />}
                {display == "Admin" && <Admin />}
            </div>
        </div>
    )
}
