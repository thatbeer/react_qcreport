import React from 'react'
import CheckTab from '../checktab'

const Step3 = () => {
  return (
    <>
        <div className='flex flex-col'>
            {/* <h1 className='text-3xl font-bold'>3. วัดตำแหน่งก่อนเจาะ</h1> */}

            {/* Borede pile */}
            <div className='mx-auto w-full relative my-2'>
            <div className='  bg-green-200'>
            <div className='py-1 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการวัดตำแหน่ง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start border-r border-gray-600'>วันที่เริ่ม</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start  bg-white'>25 ธ.ค. 2565 (14:01)</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start border-r border-gray-600'>วันที่เสร็จ	</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start  bg-white'>25 ธ.ค. 2565 (14:01)</td>
                </tr>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start border-r border-gray-600'>ช่างสำรวจ</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start  bg-white'>อิฐ-ชาคริต ลัทธิพรหม</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start lg:w-1/3 border-r border-gray-600'>ตำแหน่งตั้งกล้อง</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start lg:w-2/3  bg-white'>BM2 (1509857.607,664690.047)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start lg:w-1/3 border-r border-gray-600'>ตำแหน่งธงหลัง</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start lg:w-2/3  bg-white'>BM1 (1509855.756,664743.918)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start lg:w-1/3 border-r border-gray-600'>Resection</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start lg:w-2/3  bg-white'>No</td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-600  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ตำแหน่งเคสซิ่ง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start lg:w-1/3 border-r border-gray-600'>ระดับบนท่อปลอกเหล็ก (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start lg:w-2/3  bg-white'>0.0180</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 text-start lg:w-1/3 border-r border-gray-600'>ระดับพื้นดิน (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 text-start lg:w-2/3  bg-white'>-0.6700</td>
                </tr>
                </tbody>
            </table>
            </div>


            {/* dwall */}
            <div className='mx-auto w-full relative my-2'>
            <div className='  bg-green-200'>
            <div className='py-1 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการวัดตำแหน่ง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r border-gray-600'>วันที่เริ่ม</th>
                    <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:01)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r border-gray-600'>วันที่เสร็จ</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:05)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r border-gray-600'>ช่างสำรวจ</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-white'>1.20</td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-600  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ตำแหน่งเคสซิ่ง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r border-gray-600'>ระดับท็อปไกด์วอลล์ (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-white'>0.0180</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r border-gray-600'>ระดับพื้นดิน (ม.)</th>
                    <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start bg-white'>-0.6700</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>



           
            </div>
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"}</li>
                    <li className='text-sm'>{"ระดับบนท็อปไกด์วอลล์ < ระดับพื้นดิน"}</li>
                </div>
            </div>
            <CheckTab active={false} note="จะขึนแถบสีแดงเมื่อมีการป้อนข้อมูลลงหมายเหตุ" />



            <div className='overflow-x-auto my-2 '>  
            <table className="table lg:table-auto w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr className=''>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 hidden '>	</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ค่าพิกัดหมุด	</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ตามแบบ</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ที่อ่านได้	</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>คลาดเคลื่อน</th>
                    </tr>
                </thead>
                <tbody className=' '>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>22222</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>22222</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>0.00</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>2</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>111111</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>11111</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300   '>0.00</td>
                        </tr>
                        
                </tbody>
            </table>
            </div>


            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ค่าตำแหน่งเคสซิ่งเยื้องเกิน ± 0.03 ม.</li>
                    <li className='text-sm'>ไม่ได้ใส่รูปภาพหน้ากล้องเซอร์เวย์ที่แสดงค่าพิกัดเข็มที่อ่านได้และระยะคลาดเคลื่อนของค่าพิกัดเข็ม</li>
                </div>
            </div>




        </div>
    </>
  )
}

export default Step3