import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"
import Navbar from "./components/Navbar"

export default function App() {
   return (
   <div className="h-auto">
      <Navbar />
      <Button text={'Button'} bgColor={'bg-yellow-500'} hoverColor={'bg-purple-500'} />
      {/* <DisplayArea cl={"bg-blue-300 h-1/2 p-[1rem]"} /> */}
   </div>
   )
}