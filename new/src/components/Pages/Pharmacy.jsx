import React from "react";
import Table from "../Table";
import data from "./data/Pharmacydata";

export default function Pharmacy() {
    let headers = Object.keys(data[0]);
    let new_data = [...data];
    for(let i=0; i<new_data.length; i++){
        new_data[i] = [new_data[i]["ID"], new_data[i]["Date of Order"], new_data[i]["Name of Doctor"], new_data[i]["Medicines"], new_data[i]["Date of Delivery"], new_data[i]["Pharmacist Name"]]
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
        </>
    )
}
