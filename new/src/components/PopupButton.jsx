import React from 'react'
import "../styles/PopupButton.css"

export default function PopupButton(props) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg overwrite">
        <button type="button" class="btn btn-primary">
            {props.title}
        </button>
    </div>
  )
}
