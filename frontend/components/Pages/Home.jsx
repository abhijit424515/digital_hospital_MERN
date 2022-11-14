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
// import "../../styles/PatientInfo.css";

export default function Home(props) {
  function StudentInformation() {
    return (
      <View className="flex h-[66.66vh]">
        <View className="w-1/3  m-auto">
          <Image src={{uri: data.img}} alt="profile" className="profileImage m-auto" />
        </View>
        <View className="w-2/3 p-5 m-auto text-2xl">
            <Text className="font-bold text-5xl">{data.name}</Text> <br />
            <Text className="font-bold">Roll no</Text> : {data.rollNo} <br />
            <Text className="font-bold">Mobile number</Text> : {data.mobileNo} <br />
            <Text className="font-bold">Email</Text> : {data.email} <br />
            <Text className="font-bold">Age</Text> : {data.age} <br />
            <Text className="font-bold">Department</Text> : {data.department}
        </View>
      </View>
    );
  }

  const [display, changeDisplay] = useState("Student Information");
  return (
    <View>
      <Navbar changeState={changeDisplay} />
      <View className="m-5 dark">
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
      </View>
    </View>
  );
}
