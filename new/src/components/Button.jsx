import React from 'react'
import "../styles/Button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
  return (
    <>
    <button 
      type="button" 
      className={'btn' + ' ' + props.tw} 
      onClick={props.click}
    >
        <FontAwesomeIcon icon={props.fai} />
        {" " + props.text}
    </button>
    </>
  )
}
