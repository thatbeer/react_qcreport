import React from 'react'

const CheckTab = (props) => {
    const { active , note} = props
  return (
    <>
        {/* green/red tab */}
        <div className='relative w-full h-full  rounded-lg my-2'>
            <div className='flex flex-row items-center justify-start w-full h-[60px] '>
                <div className=' p-1 bg-gray-200 border border-white h-full flex items-center justify-start'>
                    <h1 className='font-bold text-sm px-2 tracking-wide min-w-1/3'><strong>Note: </strong> จะขึนแถบสีแดงเมื่อมีการป้อนข้อมูลลงหมายเหตุ</h1>
                </div>
                {/* green/red container */}
                <div className={`w-3/4 p-2 ${active ? 'bg-green-600' : 'bg-red-600'} text-blue-100
                border border-l-none border-white h-full rounded-r text-start truncate items-center`}
                // style={`${active ? 'bg-emerald-400' : 'bg-red-400'} class`}
                >{note}</div>
            </div>
        </div>
    </>
  )
}

export default CheckTab