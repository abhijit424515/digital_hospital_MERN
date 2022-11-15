import React from "react";
import Table from "../Table";
import data from "./data/ReimburseData";
import PopupButton from "../PopupButton";

export default function Reimburse() {
    let headers = Object.keys(data[0]);
    let new_data = [];
    for(let i=0; i<data.length; i++){
        new_data[i] = [data[i]["ID"], data[i]["Submitted on"], data[i]["Current Status"], data[i]["Paid/Declined with reason"]]
    }

    return (
        <>
           <Table headers={headers} data={new_data} /> 
           <PopupButton title="Submit Bill"/>
        </>
    )
}


