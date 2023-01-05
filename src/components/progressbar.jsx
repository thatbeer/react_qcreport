import React from 'react'

function Progressbar(props) {
  return (
    <>
        <div className='container mx-auto  pt-2 pb-4 w-full
        flex flex-col items-center'>
            <div className='w-full my-2 h-auto bg-gray-100 rounded-lg border border-offset-3 border-gray-600'>
                {/* Progress Bar */}
                {/* <div className='title my-2 rounded flex flex-start justify-center '>
                    <h1 className='p-1 font-bold text-xl text-blue-900 truncate'>Project Name: XIm Suksawat rama3 onnnui</h1>
                </div> */}
                <div className=" bg-gray-200 h-6 rounded-2xl my-2 flex 
                flex-inline justify-start items-center mx-auto" style={{width: "95%"}} >
                    <div 
                        className="bg-red-400 h-6  flex flex-start items-center justify-center 
                        text-md font-semibold text-white rounded-2xl" 
                        style={{width: "75%"}}>
                        75%
                    </div> 
                </div>
                {/* detail of piles number */}
                <div className='flex w-full divide-x-2 divide-gray-700'>
                    <div className='flex flex-between w-full divide-x divide-gray-500'>
                        <span className='flex flex-col w-full items-center 
                        justify-start mx-auto my-2'>
                            <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            รอส่ง 0/100
                        </span>
                        <span className='flex flex-col w-full
                         items-center justify-start mx-auto my-2'>
                             <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            เหลือ 100
                        </span>
                        <span className='flex flex-col w-full
                         items-center justify-start mx-auto my-2'>
                             <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            เหลือ 100
                        </span>
                        <span className='flex flex-col w-full
                         items-center justify-start mx-auto my-2'>
                             <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            รอส่ง 100
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Progressbar