import React from "react";
import Table from "../Table";
import data from "./data/DoctorsAvailabilityData";

export default function DoctorsAppointment() {
    let headers = Object.keys(data[0]);
    let new_data = [];
    for(let i=0; i<data.length; i++){
        if (data[i]["status"] == "Booked"){
            new_data.push([data[i]["ID"], data[i]["Name of Doctor"], data[i]["Start Date"], data[i]["End Date"], data[i]["Start Time"], data[i]["End Time"], 
            (  
                <button type="button" id={data[i]["ID"]} class="btn btn-primary">
                    Cancel
                </button>
            )
            ])
        }
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
        </>
    )
}

