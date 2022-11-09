import React from 'react'
// import "../styles/Navbar.css"
import Button from './Button'

const nav_headers = ["🏠 Home", "Medical Book", "Doctor's Visit", "Pharmacy", "Lab Order", "Reports", "Doctor's Availability", "Doctor's Appoinment", "Reimburse"]

export default function Navbar(props) {

    console.log(props);
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {nav_headers.map((item) => (
                    <Button key={item} tw={"h-[4rem] m-1 bg-sky-500 hover:bg-sky-700"} text={item} click={() => { props.changeState(item)}} />
                ))}
            </div>
        </nav>
    )
}
