import React from 'react'

function Statcard() {
  return (
    <>
        <div className='mx-auto container w-full my-2
            flex flex-col items-center'>
            <div className='flex flex-col h-auto w-full my-2   border
              border-white divide-y divide-white bg-gray-200 '>
                <h1 className='flex items-center justify-center bg-blue-500  text-white
                 rounded-b-none w-full  text-lg font-bold'>
                    <p>ประเภทเสาเข็ม : Bore pile</p></h1>
                <div className='flex flex-row h-full divide-x  divide-white'>
                    <div className='flex flex-col w-full items-center justify-center mx-auto my-2'>
                        <h1 className='text-sm'>Diameter</h1>
                        <p className='text-xl  font-bold'>1.2</p>
                        <p className='text-sm'>(m.)</p>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center mx-auto my-2'>
                        <h1 className='text-sm'>Cut off</h1>
                        <p className='text-xl  font-bold'>2</p>
                        <p className='text-sm'>(m.)</p>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center mx-auto my-2'>
                        <h1 className='text-sm'>Pile Tip</h1>
                        <p className='text-xl  font-bold'>56</p>
                        <p className='text-sm'>(m.)</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Statcard


