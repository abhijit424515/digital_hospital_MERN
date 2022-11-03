import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import MedicalHistory from "./components/MedicalHistory/MedicalHistory"
import LabReportHistory from "./components/LabReports/LabReportHistory"

export default function App() {
   return (
   <div className="h-auto">
      {/* <DisplayArea cl={"bg-blue-300 h-[15vh] p-[1rem] flex justify-evenly"} buttons={[]}/> */}
      <Navbar />
      {/* <button type="button" class="btn btn-warning c1 c" onClick = {(e) => null}>Vaccinations list</button> */}
      {/* <Button text={'Button'} bgColor={'bg-yellow-500'} hoverColor={'bg-purple-500'} /> */}
      <DisplayArea cl={"bg-blue-300 h-[15vh] p-[1rem] flex justify-evenly"} />
      <MedicalHistory/>
      <LabReportHistory />
   </div>
   )
}