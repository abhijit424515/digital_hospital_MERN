import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"
import Navbar from "./components/Navbar"

export default function App() {
   return (
   <div className="h-auto">
      {/* <DisplayArea cl={"bg-blue-300 h-[15vh] p-[1rem] flex justify-evenly"} buttons={[]}/> */}
      <Navbar />
      <Button text={'Button'} bgColor={'bg-yellow-500'} hoverColor={'bg-purple-500'} />
      <DisplayArea cl={"bg-blue-300 h-[15vh] p-[1rem] flex justify-evenly"} />
   </div>
   )
}