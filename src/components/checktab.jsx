import React from 'react'

const CheckTab = (props) => {
    const { active , note} = props
  return (
    <>
        {/* green/red tab */}
        <div className='relative w-full h-full  rounded-lg my-2'>
            <div className='flex flex-row items-center justify-start w-full h-[60px]  border'>
                <div className=' p-1 border border-gray-600 h-full flex items-center justify-start'>
                    <h1 className='font-bold text-sm px-2 tracking-wide min-w-1/3'><strong>Note: </strong> จะขึนแถบสีแดงเมื่อมีการป้อนข้อมูลลงหมายเหตุ</h1>
                </div>
                {/* green/red container */}
                <div className={`w-2/3 ${active ? 'bg-emerald-400' : 'bg-red-400'} border border-l-none border-gray-600 h-full rounded-r`}
                // style={`${active ? 'bg-emerald-400' : 'bg-red-400'} class`}
                ></div>
            </div>
        </div>
    </>
  )
}

export default CheckTab