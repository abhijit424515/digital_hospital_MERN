import React from 'react'
import Button from './Button'
export default function DisplayArea(props) {
   return (
   <div className={props.cl} >
      {console.log(props.buttons)}
   </div>
   )
}
