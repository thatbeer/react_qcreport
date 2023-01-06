import React from 'react'
import { ChartBarIcon } from '@heroicons/react/24/outline'
const ButtonFilter = (props) => {
    const {filter , value } = props
  return (
    <>
        <button onClick={props.onClick}     value={value}
                            className={`btn btn-primary mx-10 focus:bg-blue-200
                            ${  filter === "ทำค้าง" ? "bg-blue-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ChartBarIcon className='w-4 h-4 relative left-0' /> ทำค้าง
        </button>
    </>
  )
}

export default ButtonFilter