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
import StudentInformation from './StudentInformation'
import Reimburse from './Reimburse'
import Admin from './Admin'

function HomeDisplay() {
    return (
        <>
            HOME PAGE
        </>
    )
}

export default function Home() {
    const [page, changePage] = useState("Home")
    return (
        <div>
            <Navbar changeState={changePage} />
            {page == "Home" && <HomeDisplay />}
            {page == "MedicalBook" && <MedicalBook />}
            {page == "Doctor'sVisit" && <DoctorsVisit />}
            {page == "Pharmacy" && <Pharmacy />}
            {page == "LabOrder" && <LabOrder />}
            {page == "Reports" && <Reports />}
            {page == "Doctor'sAvailability" && <DoctorsAvailability />}
            {page == "Doctor'sAppoinment" && <DoctorsAppointment />}
            {page == "StudentInformation" && <StudentInformation />}
            {page == "Reimburse" && <Reimburse />}
            {page == "Admin" && <Admin />}
        </div>
    )
}
