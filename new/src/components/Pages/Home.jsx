import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";

import MedicalBook from "./MedicalBook";
import DoctorsVisit from "./DoctorsVisit";
import Pharmacy from "./Pharmacy";
import PendingLabs from "./PendingLabs";
import PreviousLabs from "./PreviousLabs";
import DoctorsAppointment from "./DoctorsAppointment";
import DoctorsAvailability from "./DoctorsAvailability"
import Reimburse from "./Reimburse";
// import Admin from "./Admin";

import data from "./data/PatientInfo/PatientData";
import "../../styles/PatientInfo.css";

export default function Home(props) {
  function StudentInformation() {
    return (
      <div className="flex h-[66.66vh]">
        <div className="w-1/3  m-auto">
          <img src={data.img} alt="profile" className="profileImage m-auto" />
        </div>
        <div className="w-2/3 p-5 m-auto text-2xl">
            <h1 className="font-bold text-5xl">{data.name}</h1> <br />
            <span className="font-bold">Roll no</span> : {data.rollNo} <br />
            <span className="font-bold">Mobile number</span> : {data.mobileNo} <br />
            <span className="font-bold">Email</span> : {data.email} <br />
            <span className="font-bold">Age</span> : {data.age} <br />
            <span className="font-bold">Department</span> : {data.department}
        </div>
      </div>
    );
  }

  const [display, changeDisplay] = useState("Student Information");
  return (
    <div>
      <Navbar changeState={changeDisplay} />
      <div className="m-5 dark">
        {display == "Medical Book" && <MedicalBook />}
        {display == "Doctor's Visit" && <DoctorsVisit />}
        {display == "Pharmacy" && <Pharmacy />}
        {display == "Lab Order" && <PendingLabs />}
        {display == "Reports" && <PreviousLabs />}
        {display == "Doctor's Availability" && <DoctorsAvailability />}
        {display == "Doctor's Appoinment" && <DoctorsAppointment />}
        {display == "Student Information" && <StudentInformation />}
        {display == "Reimburse" && <Reimburse />}
        {/* {display == "Admin" && <Admin />} */}
      </div>
    </div>
  );
}
