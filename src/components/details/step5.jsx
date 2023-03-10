import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'
import DyCarousel from '../Dy-carousel';
import ViewImage from '../ViewImage/ViewImage';


import RedGreenIcon from '../../utils/R-G-Icons'

const Step5 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            {/* <h1 className='text-3xl font-bold'>5. เจาะเสาเข็ม</h1> */}

            {isBoredPile ? 
            
                <>
                    {/* bored pile */}
                    <div className='mx-auto w-full relative my-2'>
                    <div className=' block bg-white'>
                    <div className='py-1 border border-white   flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลการเจาะ</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เช็คลูกดิ่ง</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '><RedGreenIcon pass={1} className='h-5 w-5'/></td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เช็คระดับน้ำ</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '><RedGreenIcon pass={1} className='h-5 w-5'/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='py-1 border-x border-white  flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลเสาเข็ม</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>1.ระดับบนท่อปลอกเหล็ก (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '>1.2100</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm  border-r bg-orange-200 border-white'>2.ระดับพื้นดิน (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '>1.1400</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>3.ระดับตัดหัวเสาเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '>-12.5500</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>4.ความยาวเคสซิ่ง(ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>15.000<div className='hidden lg:flex'>(จากขั้นตอนที่ 2 ปักเคสซิ่ง)</div></td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>5.ระดับปลายเสาเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>-67.0000</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>6.ความลึกที่ต้องการวัดจากปากเคสซิ่ง (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>68.2100<div className='hidden lg:flex'>(ระดับบนท่อปลอกเหล็ก - ระดับปลายเสาเข็ม)</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='py-1 border-x border-white  flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลการเตรียมเหล็กหิ้วโครง</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ระยะเผื่อโครงเหล็กจม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '>0.500</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>0.500</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>12.760</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เหล็กหิ้วโครงที่วัดได้ (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>12.800</td>
                        </tr>
                        </tbody>
                    </table>
                    
                    </div>
                    </div>
                </>
            :
            
                <>
                    {/* Dwall */}
                    <div className='mx-auto w-full relative my-2'>
                    <div className=' block bg-white'>
                    <div className='py-1 border border-white   flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลการเจาะ</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เช็คลูกดิ่ง</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '><CheckIcon className='h-5 w-5'/></td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เช็คระดับน้ำ</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '><CheckIcon className='h-5 w-5'/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='py-1 border-x border-white  flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลเสาเข็ม
                    </h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>1.ระดับพื้นดิน (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '>0.4750</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>2.ระดับท็อปไกด์วอลล์ (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '>-0.2200</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>3.ระดับล่างไกด์วอลล์ (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white '>-5.6000</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>4.ระดับตัดหัวเสาเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>15.000(จากขั้นตอนที่ 2 ปักเคสซิ่ง)</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>5.ระดับปลายเสาเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>-62.0000</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>6.ความลึกที่ต้องการวัดจากท็อปไกด์วอลล์ (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>62.4750(ระดับบนท่อปลอกเหล็ก - ระดับปลายเสาเข็ม)</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='py-1 border-x border-white  flex items-center
                    justify-start font-bold  bg-blue-500 text-white'>
                        <h1 className='mx-2'>ข้อมูลการเตรียมเหล็กหิ้วโครง</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-200 '>
                        <tr className='  border border-x border-white  '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ระยะเผื่อโครงเหล็กจม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-600 text-white  '>0.500</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>0.500</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>5.075</td>
                        </tr>
                        <tr className=' border-b border-x border-white   '>
                            <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เหล็กหิ้วโครงที่วัดได้ (ม.)</th>
                            <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>4.900</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </>
            }





            
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    { isBoredPile ? 
                        <>
                            <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                            <li className='text-sm'>ไม่ได้เช็คดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                            <li className='text-sm'>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"}</li>
                            <li className='text-sm'>{"ระดับพื้นดิน < ระดับตัดหัวเสาเข็ม"}</li>
                        </>
                        :
                        <>
                            <li className='text-sm'>ไม่ได้เช็คลูกดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                            <li className='text-sm'>{"ระดับบนท็อปไกด์วอลล์ < ระดับพื้นดิน"}</li>
                            <li className='text-sm'>{"ระดับพื้นดิน < ระดับตัดหัวเสาเข็ม"}</li>
                            <li className='text-sm'>{"ระยะเผื่อโครงเหล็กจม < 0.300 ม."}</li>
                        </>

                    }
                </div>
            </div>
            
            <CheckTab/>


            <div className='overflow-x-auto my-2 '>  
            <table className="table-fixed lg:table-auto text-xs w-full">
                <thead className='bg-blue-500 text-white rounded'>
                    <tr className=''>
                        <th className='p-1  mx-auto  border border-white hidden'></th>
                        <th className='p-1  mx-auto  border border-white'>ลำดับหัวเจาะ</th>
                        <th className='p-1  mx-auto  border border-white '>ความลึกวัดจาก<br/>ปากเคสซิ่ง(ม.)</th>
                        <th className='p-1  mx-auto   border border-white '>เครื่องจักร/เครน No.</th>
                        <th className='p-1  mx-auto   border border-white '>เครื่องเจาะ</th>
                        <th className='p-1  mx-auto   border border-white '>วัน/เวลา <br/> (เริ่ม-หยุดเจาะเสาเข็ม)</th>
                        <th className='p-1  mx-auto lg:w-[100px]  border border-white '>คนขับ</th>
                        <th className='p-1  mx-auto   border border-white '>หลุมพัง</th>
                        <th className='p-1  mx-auto   border border-white '>ขนาดฟันข้างของบัคเก็ต(ม.)</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-2002.บัคเก็ต '>
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='p-1 border-x border-white '>1.สว่าน</td>
                            <td className='p-1 border-r border-white '>14.000</td>
                            <td className='p-1 border-r border-white '>PR-25</td>
                            <td className='p-1 border-r border-white '>{' '}</td>
                            <td className='p-1 border-r border-white '>3 ม.ค. 2566 (14:00 - 14:40)</td>
                            <td className='p-1 border-r border-white '>บุญมี เชื้อตระกูล</td>
                            <td className='p-1 border-r border-white '></td>
                            <td className='p-1 border-r border-white '>-</td>
                        </tr>         
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='p-1 border-x border-white '>2.บัคเก็ต</td>
                            <td className='p-1 border-r border-white '>30</td>
                            <td className='p-1 border-r border-white '>PR-25</td>
                            <td className='p-1 border-r border-white '>{' '}</td>
                            <td className='p-1 border-r border-white '>3 ม.ค. 2566 (14:00 - 14:40)</td>
                            <td className='p-1 border-r border-white '>บุญมี เชื้อตระกูล</td>
                            <td className='p-1 border-r border-white '></td>
                            <td className='p-1 border-r border-white '>-</td>
                        </tr>         
                        <tr  className="text-center border-y border-white   my-auto items-center justify-center">
                            <td className='p-1 border-x border-white '>3.บัคเก็ต</td>
                            <td className='p-1 border-r border-white  bg-green-600 text-white'>68.600</td>
                            <td className='p-1 border-r border-white '>PR-25</td>
                            <td className='p-1 border-r border-white '>{' '}</td>
                            <td className='p-1 border-r border-white '>3 ม.ค. 2566 (14:00 - 14:40)</td>
                            <td className='p-1 border-r border-white '>บุญมี เชื้อตระกูล</td>
                            <td className='p-1 border-r border-white '></td>
                            <td className='p-1 border-r border-white '>-</td>
                        </tr>         
                </tbody>
            </table>
            </div>

            {/* <h1>corousel show picture</h1> */}
            {/* <DyCarousel /> */}
            
            <ViewImage />

            {/* ps tab */}
            <div className='relative pt-[14rem]'>
                <div className='mx-1'>
                    { isBoredPile ? 
                        <>
                            <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                            <li className='text-sm'>{"ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                        </>
                        :
                        <>
                            <li className='text-sm'>ไม่ได้เช็คลูกดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                            <li className='text-sm'>{"ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                        </>

                    }
                </div>
            </div>





        </div>
    </>
  )
}

export default Step5