import React from 'react'
import "../styles/Navbar.css"

export default function Navbar(props) {
    return (
        <div className='navb'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="al">
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("MedicalBook");
                        }}>Medical Book</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Doctor'sVisit");
                        }}>Doctor's Visit</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Pharmacy");
                        }}>Pharmacy</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("LabOrder");
                        }}>Lab Order</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Reports");
                        }}>Reports</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Doctor'sAvailability");
                        }}>Doctor's Availability</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Doctor'sAppoinment");
                        }}>Doctor's Appoinment</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("StudentInformation");
                        }}>Student Information</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Reimburse");
                        }}>Reimburse</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => {
                            props.changeState("Admin");
                        }}>Admin</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
