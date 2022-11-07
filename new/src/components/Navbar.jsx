import React from 'react'
import "../styles/Navbar.css"

const nav_headers = ["Student Information", "Medical Book", "Doctor's Visit", "Pharmacy", "Lab Order", "Reports", "Doctor's Availability", "Doctor's Appoinment", "Reimburse", "Admin"]

export default function Navbar(props) {
    function navButton(i){
        return(
            <button type="button" class="btn btn-outline-primary" onClick={() => {
                props.changeState(i);
            }}>{i}</button>
        )
    }

    return (
        <div className='navb'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="al">
                        {nav_headers.map(navButton)}
                    </div>
                </div>
            </nav>
        </div>
    )
}
