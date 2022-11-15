import React from "react";
import Table from "../Table";
import data from "./data/DoctorVisitdata";

export default function DoctorsVisit() {
    let headers = Object.keys(data[0]);
    let new_data = [...data];
    for(let i=0; i<new_data.length; i++){
        new_data[i] = [new_data[i]["ID"], new_data[i]["Date of Visit"], new_data[i]["Name of Doctor"]]
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
        </>
    )
}
