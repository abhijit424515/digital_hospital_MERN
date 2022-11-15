import React from "react";
import Table from "../Table";
import data from "./data/DoctorsAvailabilityData";

export default function DoctorsAvailability() {
    let headers = Object.keys(data[0]);
    let new_data = [...data];
    for(let i=0; i<new_data.length; i++){
        if (new_data[i]["status"] == "Book"){
            new_data[i] = [new_data[i]["ID"], new_data[i]["Name of Doctor"], new_data[i]["Start Date"], new_data[i]["End Date"], new_data[i]["Start Time"], new_data[i]["End Time"], 
            (  
                <button type="button" id={new_data[i]["ID"]} class="btn btn-primary">
                    {new_data[i]["status"]}
                </button>
            )
            ]
        }
        else if (new_data[i]["status"] == "Booked") {
            new_data[i] = [new_data[i]["ID"], new_data[i]["Name of Doctor"], new_data[i]["Start Date"], new_data[i]["End Date"], new_data[i]["Start Time"], new_data[i]["End Time"],new_data[i]["status"]]
        }
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
        </>
    )
}
