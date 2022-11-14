import React from 'react'
import Button from './Button'

import { faHouse } from '@fortawesome/free-solid-svg-icons'

const nav_headers = [
    [faHouse,"Home"], 
    [faHouse,"Medical Book"], 
    [faHouse,"Doctor's Visit"], 
    [faHouse,"Pharmacy"], 
    [faHouse,"Lab Order"], 
    [faHouse,"Reports"], 
    [faHouse,"Doctor's Availability"], 
    [faHouse,"Doctor's Appoinment"], 
    [faHouse,"Reimburse"] 
]

export default function Navbar(props) {    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {nav_headers.map((item) => (
                    <Button key={item} fai={item[0]} tw={"h-[4rem] m-1 bg-sky-500 hover:bg-sky-700"} text={item[1]} click={() => { props.changeState(item[1])}} />
                ))}
            </div>
        </nav>
    )
}
