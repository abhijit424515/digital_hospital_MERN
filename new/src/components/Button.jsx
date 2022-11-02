import React from 'react'
import "../styles/Button.css"

export default function Button(props) {
  return (
    <>
    <button 
      type="button" 
      className={'btn' + ' ' + props.bgColor + ' hover:' + props.hoverColor} 
    >
      {props.text}
    </button>
    </>
  )
}
