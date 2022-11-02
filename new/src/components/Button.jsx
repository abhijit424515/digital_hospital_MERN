import React from 'react'

export default function Button(props) {
  return (
    <>
    <button type="button" className='bg-red-900 rounded-md h-10 my-auto px-2'>{props.text}</button>
    </>
  )
}
