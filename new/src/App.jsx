import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"

export default function App() {
   return (
   <div className="h-auto">
      <DisplayArea cl={"bg-blue-300 h-1/2 p-[1rem]"} />
      <Button text={'Button'}/>
   </div>
   )
}