import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'


const Step11 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-gray-600 rounded-t  flex items-center
                    justify-start font-bold  bg-blue-200'>
                        <h1 className=' mx-2'>ข้อมูลถอนเคสซิ่ง</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className=' '>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>วันที่เริ่ม</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (18:01)</td>
                            
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>วันที่เสร็จ	</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (18:07)</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>เครื่องจักร/เครน No.	</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>CR-31</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ไวโบรแฮมเมอร์ No.</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>VH-14</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ผู้ขับ</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>รั้ว พัดภู่</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ความลึกคอนกรีต วัดจากผิวดิน (ม.)</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>11.790</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1   w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ความสูงหัวเข็มหลังถอนเคสซิ่ง (ม.)</th>
                            {/* ##### RED GREEN */}
                            <td className='px-2 py-1   w-1/2 lg:w-2/3 text-start  bg-red-400 text-white'>1.900</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ระยะเยิ้มตัวของคอนกรีต (ม.)</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>-</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>เช็คลูกดิ่ง</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>Yes</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-green-200 border-gray-600 '>เช็คระดับน้ำ</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>Yes</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <CheckTab/>

            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความสูงเผื่อหัวเข็มไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    <li className='text-sm'>{"1.30 ม. ≤ [ความสูงหัวเข็มหลังถอนเคสซิ่ง] ≤ 1.70 ม."}</li>
                </div>
            </div>

            <h1>Graph</h1>

            <div className='mx-auto border border-gray-700 w-full h-screen relative my-2 justify-center'>
                <div className='mx-auto bg-blue-200 h-10 border-b border-gray-700'>
                    <h1 className='mx-2 py-1 text-bold'>กราฟเปรียบเทียบเวลาการทำงาน และ ความลึก</h1>
                </div>
                <div className='flex flex-col items-center justify-center my-2'>
                    <h2>sdad</h2>
                    <h2>sdaasd</h2>
                </div>

            </div>
        </div>
    </>
  )
}

export default Step11