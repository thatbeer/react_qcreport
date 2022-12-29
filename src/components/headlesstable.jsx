import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {MinusIcon} from '@heroicons/react/24/outline'

const exist = true
const pass1 = true
const pass2 = false
const HeadlessTable = () => {
  return (
    <>
        
        <div className='mx-auto w-full relative my-2'>
          <div className=' block bg-green-200'>
          <div className='py-1 border border-gray-600 rounded-t  flex items-center
           justify-start font-bold bg-blue-200'>
            <h1 className='mx-2'>ข้อมูลการปักเคสซิ่ง</h1>
          </div>
          <table className='w-full'>
            {/* <thead>
              <tr>
                <th>1</th>
                <th>2</th>
              </tr>
            </thead> */}
            <tbody className=' '>
              <tr className='  border border-x border-gray-600  '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>วันที่เริ่ม</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:01)</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>วันที่เสร็จ</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:05)</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>เคสซิ่ง ∅ (ม.)</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>1.20</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>ความยาว (ม.)</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>15.000</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600 truncate'>เครื่องจักร/เครน No.</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>CR-20</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600 truncate'>ไวโบรแฮมเมอร์ No.</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>VH-19</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>ผู้ขับ</th>
                <td className='px-2 py-1 text-sm w-1/2  lg:w-2/3 text-start bg-white'>โบ-พงษ์เทพ คิดดีจริง</td>
              </tr>
              <tr className=' border-b border-x border-gray-600   '>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 text-start border-r border-gray-600'>เช็คลูกดิ่ง</th>
                {pass1 ? 
                  <td className='px-2 py-1 text-sm  bg-emerald-400 h-auto  flex justify-center'><CheckIcon className='w-6 h-6' /></td>
                : 
                  <td className='px-2 py-1 text-sm   bg-red-400 h-auto flex  justify-center'><MinusIcon className='w-6 h-6'/></td>
                }
              </tr>
              <tr className=' border-b border-x border-gray-600    h-full'>
                <th className='px-2 py-1 text-sm w-1/2  lg:w-1/3 border-r text-start border-gray-600 '>เช็คระดับน้ำ</th>
                {pass2 ? 
                  <td className='px-2 py-1 text-sm  bg-emerald-400 h-auto flex  justify-center'><CheckIcon className='w-6 h-6' /></td>
                : 
                  <td className=' px-2 py-1 text-sm    bg-red-400 h-auto flex  justify-center'><MinusIcon className='w-6 h-6'/></td>
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