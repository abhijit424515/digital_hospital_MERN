import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: `(max-device-aspect-ratio: 1/1)` });
  
  function StudentInformation() {
    return (
      <div className={isMobile ? "flex-row h-[90vh] justify-center items-center" : "flex items-center h-[90vh] justify-center"}>
        <div className={isMobile ? "mx-auto w-[40vw] h-[40vw]" : "my-auto w-[40vh] h-[40vh]"}>
          <img src={data.img} alt="profile" className="profileImage m-auto" />
        </div>
        <div className={isMobile ? "mx-auto p-5 w-[70vw] text-[4vw]" : "my-auto p-5 w-[60vw-40vh] text-[2vw]"}>
            <h1 className="font-bold">{data.name}</h1> <br />
            <span className="font-bold">Roll no</span> : {data.rollNo} <br />
            <span className="font-bold">Mobile number</span> : {data.mobileNo} <br />
            <span className="font-bold">Email</span> : {data.email} <br />
            <span className="font-bold">Age</span> : {data.age} <br />
            <span className="font-bold">Department</span> : {data.department}
        </div>
      </div>
    );
  }

  const [display, changeDisplay] = useState("Home");
  return (
    <div>
      <Navbar changeState={changeDisplay} />
      <div className="dark">
        {display == "Medical Book" && <MedicalBook />}
        {display == "Doctor's Visit" && <DoctorsVisit />}
        {display == "Pharmacy" && <Pharmacy />}
        {display == "Lab Order" && <PendingLabs />}
        {display == "Reports" && <PreviousLabs />}
        {display == "Doctor's Availability" && <DoctorsAvailability />}
        {display == "Doctor's Appoinment" && <DoctorsAppointment />}
        {display == "Home" && <StudentInformation />}
        {display == "Reimburse" && <Reimburse />}
        {/* {display == "Admin" && <Admin />} */}
      </div>
    </div>
  );
}
