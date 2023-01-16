import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'


const Step7 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-white   flex items-center
            justify-start font-bold bg-blue-300'>
                <h1 className='mx-2'>ข้อมูลการลงโครงเหล็ก</h1>
            </div>
            <table className='w-full'>
                <tbody className='bg-gray-100 '>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>วันที่เริ่ม</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>4 ม.ค. 2566 (14:08)</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>วันที่เสร็จ	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>4 ม.ค. 2566 (15:01)</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เครื่องจักร/เครน No.	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>CR-31</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ผู้ขับ	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>รั้ว พัดภู่</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ระยะเผื่อโครงเหล็กจม (ม.)	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm bg-green-600 text-white'>0.500</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>0.500</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>12.760</td>
                </tr>
                <tr className='  border border-x border-white  '>
                    <th className='py-1 px-2 lg:mx-auto w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>Sheet No.	</th>
                    <td className='py-1 px-2 lg:mx-auto w-1/2 lg:w-2/3 text-start text-sm '>6</td>
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
                    <thead className='bg-blue-300 '>
                        <tr>
                            <th className='p-2 text-sm  text-center border border-white '>โครง</th>
                            <th className='p-2 min-h-w-1/6 w-1/6 text-sm  text-center border border-white '>ลงโครงเหล็ก</th>
                            <th className='p-2 min-h-w-1/6 w-1/6 text-sm  text-center border border-white '>ลูกปูน</th>
                            <th className='p-2 text-sm  text-center border border-white '><pre className='border-b border-dashed border-white text-md'>MainBar</pre><pre className='text-md'>Spiral</pre></th>
                            
                        </tr>
                    </thead>
                    <tbody className='bg-gray-100 '>
                    <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>6</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                    หลัก: 8-DB25 SD40 x 7.6500 m. <br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 6.450 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>5</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                 หลัก: 8-DB25 SD40 x 10.0000 m.<br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 8.800 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>4</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                หลัก: 8-DB25 SD40 x 10.0000 m.<br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 8.200 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>3</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                หลัก: 16-DB28 SD50 x 12.0000 m.<br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 10.200 m. @0.300
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>2</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                หลัก: 20-DB28 SD50 x 12.0000 m.<br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 10.200 m. @0.150
                            </td>
                        </tr>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-x border-white  '>1</td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white bg--300 text-'>
                                <CheckIcon class="w-6 h-6 mx-auto"/>
                            </td>
                            <td className='px-1 py-1 mx-auto my-1 text-sm  border-r border-white   '>
                                <div className='border-b border-dashed border-white'>
                                หลัก: 30-DB28 SD50 x 12.0000 m.<br/>
                                    </div>
                                    ช่วงที่ 1 : RB9 SR24 x 10.500 m. @0.150
                            </td>
                        </tr>
                        
                          
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Step7