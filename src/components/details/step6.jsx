import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'



const Step6 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-1 border border-white   flex items-center
            justify-start  font-bold bg-blue-300'>
                <h1 className='mx-2' >ข้อมูลการเก็บตะกอน</h1>
            </div>
            <table className='w-full'>
                <tbody className='bg-gray-100 '>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>วันที่เริ่ม</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (12:50)</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>วันที่เสร็จ</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (13:00)</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>ขนาดบัคเก็ตเก็บตะกอน</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>1.00</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>เครื่องจักร/เครน No.</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>PR-25</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>คนขับ</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>บุญมี เชื้อตระกูล</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-green-600 '><CheckIcon className='w-5 h-5' /></td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>ระยะเวลารอเก็บตะกอน (นาที)	</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-green-600 '>30</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>ความลึกจากปากเคสซิ่ง(หลังรอเก็บตะกอน) (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>68.300</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>ความหนาของตะกอน (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>0.300</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-white'>ความลึกที่วัดจากปากเคสซิ่ง (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>68.600</td>
                </tr>
                <tr className='  border border-x   border-white  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 text-start border-r bg-orange-200  border-white'>ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน) (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-green-600 '>68.600</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            

          
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    { isBoredPile ? 
                        <>
                            <li className='text-sm'>ไม่ได้เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</li>
                            <li className='text-sm'>{"ระยะเวลารอเก็บตะกอน < 30 นาที"}</li>
                            <li className='text-sm'>{"ไม่ได้เช็คดิ่งและ/ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                        </>
                        :
                            null
                    }
                </div>
            </div>
            <CheckTab/>





        </div>
    </>
  )
}

export default Step6