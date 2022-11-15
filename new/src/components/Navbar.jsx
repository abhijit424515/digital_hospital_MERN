import React from 'react'
import Button from './Button'
import "../styles/NavBar.css"

import { faBookMedical, faFile, faFileMedical, faHouse, faKitMedical, faMoneyBill, faTablet, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const nav_headers = [
    [faHouse, "Home"],
    [faBookMedical, "Medical Book"],
    [faUserDoctor, "Doctor's Visit"],
    [faKitMedical, "Pharmacy"],
    [faFileMedical, "Lab Order"],
    [faFile, "Reports"],
    [faUserDoctor, "Doctor's Availability"],
    [faUserDoctor, "Doctor's Appoinment"],
    [faMoneyBill, "Reimburse"]
]

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navcontainer collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                {nav_headers.map((item) => (
                    <a key={item} class="navigationitem nav-item nav-link text-light text-center fs-2 hover:text-blue-600" onClick={() => { document.getElementsByClassName("navbar-toggler")[0].click(); props.changeState(item[1]) }} >
                        <span>
                            <FontAwesomeIcon icon={item[0]} />
                            <span class="ms-2">{item[1]}</span>
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    )
}
