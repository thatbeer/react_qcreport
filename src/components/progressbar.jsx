import React from 'react'

function Progressbar(props) {
  return (
    <>
        <div className='container mx-auto  pt-1 pb-4 
        flex flex-col items-center'>
            <div className='w-full my-2 h-[140px] bg-gray-100 rounded-lg border border-offset-3 border-gray-600'>

                <div className='title my-2 rounded flex flex-start justify-center '>
                    <h1 className='p-1 font-bold text-xl text-blue-900 truncate'>Project Name: XIm Suksawat rama3 onnnui</h1>
                </div>
                <div className=" bg-gray-200 h-6 rounded-2xl my-2 flex 
                flex-inline justify-start items-center mx-auto" style={{width: "95%"}} >
                    <div className="bg-red-400 h-6  flex flex-start items-center justify-center 
                        text-md font-semibold text-white rounded-2xl" 
                        style={{width: "75%"}}
                    >
                        75%
                        {/* <span className='bg-primary relative -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                            <span 
                                className='bg-gray-400 relative bottom-2 z-40 h-4 w-4 text-xs rounded-sm'
                            >
                                50%
                            </span>
                        </span> */}
                    </div>
                    
                </div>
                {/* detail of piles number */}
                <div className='flex w-full divide-x-2 divide-gray-700'>
                    <div className='flex flex-between w-full divide-x divide-gray-500'>
                        <span className='flex flex-col w-full items-center 
                        justify-start mx-auto my-2'>
                            เหลือ 0/100
                        </span>
                        <span className='flex flex-col w-full
                         items-center justify-start mx-auto my-2'>
                            เหลือ 0/100
                        </span>
                        <span className='flex flex-col w-full
                         items-center justify-start mx-auto my-2'>
                            เหลือ 0/100
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Progressbar