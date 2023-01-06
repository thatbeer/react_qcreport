import React from 'react'
import { ChartBarIcon } from '@heroicons/react/24/outline'
const ButtonFilter = (props) => {
    const {filter , status , name ,color} = props
  return (
    <>
        <button onClick={props.onClick}  name={name}   value={status}
                            className={`btn btn-primary mx-10 focus:${color}
                            ${  filter === name ? {color} : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ChartBarIcon className='w-4 h-4 relative left-0' /> ทำค้าง
        </button>
    </>
  )
}

export default ButtonFilter