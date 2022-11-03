import React from 'react'
import data from "../PatientInfo/PatientData";
import "../../styles/PatientInfo.css";

export default function StudentInformation(props) {
    return (
        <div className="patientdet">
            <div className="im">
                <img src={data.img} alt="profile" />
            </div>
            <div className="container">
                <div className="name">
                    <h1>{data.name}</h1>
                </div>
                <div className="job">
                    <h1>{data.job}</h1>
                </div>
                <div className="student">
                    <h1>{data.age}</h1>
                </div>
            </div>
        </div>
    );
}
