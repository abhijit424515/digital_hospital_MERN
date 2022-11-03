import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'
import PatientInfo from '../PatientInfo/PatientInfo'

export default function Home() {
    const [page, changePage] = useState("Home")
    return (
        <div>
            <Navbar changeState={changePage} />
            {page == "Home" && <PatientInfo />}
            {page == "MedicalBook" && <div> Your mom 1</div>}
            {page == "Doctor'sVisit" && <div> Your mom 2</div>}
            {page == "Pharmacy" && <div> Your mom 3</div>}
            {page == "LabOrder" && <div> Your mom 4</div>}
            {page == "Reports" && <div> Your mom 5</div>}
            {page == "Doctor'sAvailability" && <div> Your mom 6</div>}
            {page == "Doctor'sAppoinment" && <div> Your mom 7</div>}
            {page == "StudentInformation" && <div> Your mom 8</div>}
            {page == "Reimburse" && <div> Your mom 9</div>}
            {page == "Admin" && <div> Your mom 10</div>}

        </div>
    )
}
