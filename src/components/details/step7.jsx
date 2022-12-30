import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'


const Step7 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการลงโครงเหล็ก</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>วันที่เริ่ม</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>26 ธ.ค. 2565 (14:02)</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>วันที่เสร็จ	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>	26 ธ.ค. 2565 (14:02)</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>เครื่องจักร/เครน No.	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>CR-20</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>ผู้ขับ	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>โบ-พงษ์เทพ คิดดีจริง</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>ระยะเผื่อโครงเหล็กจม (ม.)	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm bg-red-200'>0.500</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>0.500</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>5.075</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-green-200 border-gray-600'>Sheet No.	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>5</td>
                </tr>
              
                </tbody>
            </table>
            </div>
            </div>

            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>{"ระยะเผื่อโครงเหล็กจม < 0.30 ม."}</li>
                </div>
            </div>
            <CheckTab />


            <div className='overflow-x-auto my-2 '>  
                <table className=" w-full">
                    <thead className='bg-blue-200 rounded'>
                        <tr>
                            <th className='p-5 text-sm w-1/6 text-center border border-gray-700 '>โครง</th>
                            <th className='p-5 w-1/5 text-sm  text-center border border-gray-700 '>ลงโครงเหล็ก</th>
                            <th className='p-5 w-1/5 text-sm  text-center border border-gray-700 '>ลูกปูน</th>
                            <th className='p-5 text-sm  text-center border border-gray-700 '><pre className='border-b border-dashed border-gray-600 text-md'>MainBar</pre><pre className='text-md'>Spiral</pre></th>
                            
                        </tr>
                    </thead>
                    <tbody className=' '>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>6</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>5</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>         
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Step7