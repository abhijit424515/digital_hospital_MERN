import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'
import PatientInfo from '../PatientInfo/PatientInfo'

export default function Home() {
    const [page, changePage] = useState("Home")
    return (
        <div>
            <Navbar changeState={changePage} />
            <PatientInfo display={page} />
        </div>
    )
}
