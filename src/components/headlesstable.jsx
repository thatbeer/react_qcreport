import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {MinusIcon} from '@heroicons/react/24/outline'

const exist = true
const pass1 = true
const pass2 = false
const HeadlessTable = () => {
  const isBoredPile = true;
  return (
    <>
        
        <div className='mx-auto w-full relative my-2'>
          <div className=' block '>
          <div className='py-1 border bg-blue-300  border-gray-600   flex items-center
           justify-start font-bold '>
            <h1 className='mx-2'>ข้อมูลการปักเคสซิ่ง</h1>
          </div>
          <table className='w-full'>
            {/* <thead>
              <tr>
                <th>1</th>
                <th>2</th>
              </tr>
            </thead> */}
            <tbody className='bg-gray-100 '>
              <tr className='  border border-x border-gray-600  '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>วันที่เริ่ม</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start'>3 ม.ค. 2566 (09:00)</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>วันที่เสร็จ</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>3 ม.ค. 2566 (09:15)</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>เคสซิ่ง ∅ (ม.)</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>1.20</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>ความยาว (ม.)</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>15.000</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600 truncate'>เครื่องจักร/เครน No.</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>CR-31</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600 truncate'>ไวโบรแฮมเมอร์ No.</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>VH-14</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>ผู้ขับ</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>รั้ว พัดภู่</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start bg-orange-200 border-r border-gray-600'>เช็คลูกดิ่ง</th>
                {pass1 ? 
                  <td className='px-2 py-1 text-sm  bg-green-300 h-auto  flex justify-center'><CheckIcon className='w-6 h-6 text-white' /></td>
                : 
                  <td className='px-2 py-1 text-sm   bg-rose-400 h-auto flex  justify-center'><MinusIcon className='w-6 h-6 text-white'/></td>
                }
              </tr>
              <tr className=' border-b border-x border-gray-600    h-full'>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 border-r bg-orange-200 text-start border-gray-600 '>เช็คระดับน้ำ</th>
                {pass2 ? 
                  <td className='px-2 py-1 text-sm  bg-green-300 h-auto flex  justify-center'><CheckIcon className='w-6 h-6 text-white' /></td>
                : 
                  <td className=' px-2 py-1 text-sm    bg-rose-400 h-auto flex  justify-center'><MinusIcon className='w-6 h-6 text-white'/></td>
                }
              </tr> 
            </tbody>
          </table>
          </div>
        </div>
    </>
  )
}

export default HeadlessTable