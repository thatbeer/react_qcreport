import React from 'react'
import CheckTab from '../checktab';

import { CheckIcon , MinusIcon } from '@heroicons/react/24/outline'


const Step1 = () => {
    const active = true
    const isBoredPile = true
    return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                <div className='py-1 border border-gray-600 rounded-t  flex items-center
                justify-start font-bold  bg-blue-200'>
                    <h1 className='mx-2'>ข้อมูลการเตรียมโครงเหล็ก</h1>
                </div>
                <table className='w-full'>
                    <tbody className=' '>
                    <tr className='  border border-x border-gray-600 ite '>
                        <th className='px-2 py-1 text-sm w-1/3 lg:w-1/3 bg-green-200 border-r text-start border-gray-600'>วันที่เริ่ม</th>
                        <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start bg-white'>4 ม.ค. 2566 (10:44)</td>
                    </tr>
                    <tr className=' border-b border-x border-gray-600  een '>
                        <th className='px-2 py-1 text-sm w-1/3 lg:w-1/3 bg-green-200 border-r text-start border-gray-600'>วันที่เสร็จ</th>
                        <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start bg-white'>4 ม.ค. 2566 (11:27)</td>
                    </tr>
                    <tr className=' border-b border-x border-gray-600  een '>
                        <th className='px-2 py-1 text-sm w-1/3 lg:w-1/3 bg-green-200 border-r text-start border-gray-600'>ชื่อผู้รับเหมาผูกเหล็ก</th>
                        <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start bg-white'>จำลอง</td>
                    </tr>
                    <tr className=' border-b border-x border-gray-600  een '>
                        <th className='px-2 py-1 text-sm w-1/3 lg:w-1/3 bg-green-200 border-r text-start border-gray-600'>Sheet No.</th>
                        <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start bg-white'>6</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            

          

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full ">
                <thead className='bg-blue-200 rounded'>
                    <tr>
                        <th className='p-4 text-sm w-1/7 text-center border border-gray-700 '>โครง</th>
                        <th className='p-4 text-sm w-1/7 text-center border border-gray-700 '>ตามแบบ</th>
                        <th className='p-4 text-sm w-1/7 text-center border border-gray-700 '>ลูกปูน</th>
                        <th className='p-4 text-sm  text-center border  border-gray-700 '><pre className='border-b border-dashed border-gray-600 text-md'>MainBar</pre><pre className='text-md'>Spiral</pre></th>
                        
                    </tr>
                </thead>
                <tbody className=' '>
                   
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>
                                    หลัก: 30-DB28 SD50 x 12.0000 m.
                                </pre>
                                ช่วงที่ 1: RB9 SR24 x 10.500 m. @0.150
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>2</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>หลัก: 20-DB28 SD50 x 12.0000 m.</pre>
                                ช่วงที่ 1: RB9 SR24 x 10.200 m. @0.150
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>3</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>หลัก: 16-DB28 SD50 x 12.0000 m.</pre>
                                ช่วงที่ 1: RB9 SR24 x 10.200 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>4</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r  border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>หลัก: 8-DB25 SD40 x 10.0000 m.</pre>
                                ช่วงที่ 1: RB9 SR24 x 8.200 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>5</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r  border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>หลัก: 8-DB25 SD40 x 10.0000 m.</pre>
                                ช่วงที่ 1: RB9 SR24 x 8.800 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded  my-auto items-center justify-center">
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>6</td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto"/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-8 h-8 font-bold text-white mx-auto "/></td>
                            <td className='px-2 py-3 mx-auto my-1 text-sm  border-r  border-gray-700   '>
                                <pre className='border-b border-dashed border-gray-600'>หลัก: 8-DB25 SD40 x 7.6500 m.</pre>
                                ช่วงที่ 1: RB9 SR24 x 6.450 m. @0.300
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
            
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    { isBoredPile ? (
                        <div>
                            <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                            <li className='text-sm'>ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง</li>
                            <li className='text-sm'>ไม่ได้ใส่รูปภาพโครงเหล็ก / ลูกปูน หรือใส่รูปภาพโครงเหล็ก / ลูกปูนไม่ครบทุกโครง</li>
                        </div>)
                    :(
                        <ul>
                            <li className='text-sm'>ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง</li>
                            <li className='text-sm'>{"ไม่ได้ใส่รูปภาพโครงเหล็ก หรือใส่รูปภาพโครงเหล็กไม่ครบทุกโครง"}</li>
                        </ul>
                    )
                    }
                </div>
            </div>
            
            {/* green/red tab */}
            <CheckTab className='flex items-center' note={"จะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุจะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุจะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุจะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุ"} />
        </div>
    </>
  )
}

export default Step1