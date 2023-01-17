import React, { Children, useState } from 'react'

const Stepbutton = (props) => {
  return (
    <>
        <div>
            <button 
                type='button'
                className={`px-auto rounded-fukk border-b-2 border-blue-600 bg-blue-600 ${props.active ? "bg-gray-600": null} `}
                {...props}
            >
                {props.children}
            </button>
        </div>
    </>
  )
}

export default Stepbutton;