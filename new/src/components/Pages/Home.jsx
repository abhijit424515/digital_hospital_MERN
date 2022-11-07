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

import data from "../PatientInfo/PatientData";
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

    const [page, changePage] = useState("Student Information")
    return (
        <div>
            <Navbar changeState={changePage} />
            {page == "Medical Book" && <MedicalBook />}
            {page == "Doctor's Visit" && <DoctorsVisit />}
            {page == "Pharmacy" && <Pharmacy />}
            {page == "Lab Order" && <LabOrder />}
            {page == "Reports" && <Reports />}
            {page == "Doctor's Availability" && <DoctorsAvailability />}
            {page == "Doctor's Appoinment" && <DoctorsAppointment />}
            {page == "Student Information" && <StudentInformation />}
            {page == "Reimburse" && <Reimburse />}
            {page == "Admin" && <Admin />}
        </div>
    )
}
