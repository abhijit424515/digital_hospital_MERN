import React from "react";
import Table from "../Table";
import data from "./data/MedicalData";

export default function PendingLabs() {
    let headers = Object.keys(data[0]);
    let new_data = [...data];
    for(let i=0; i<new_data.length; i++){
        let list = new_data[i]["Medicines Prescribed"];
        let string = "";
        for(let j=0; j<list.length; j++){
            if  (j == list.length - 1){
                string += list[j].name + "- " + (list[j].quantity).toString();
            }
            else {
                string += list[j].name + "- " + (list[j].quantity).toString() + ", ";
            }
        }
        new_data[i] = [new_data[i]["ID"], new_data[i]["Prescription"], string]
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
        </>
    )
}
