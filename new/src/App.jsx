import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"

export default function App() {
   return (
   <div className="h-auto">
      <DisplayArea cl={"bg-blue-300 h-[15vh] p-[1rem] flex justify-evenly"} buttons={[
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
         <Button text={'Button'}/>,
      ]}/>
      <DisplayArea cl={"bg-red-300 h-[85vh] p-[1rem] flex justify-evenly"} />
   </div>
   )
}