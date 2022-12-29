import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'

const Step9 = () => {
  return (
    <>
        <div className='flex-col'>
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-gray-600 rounded-t  items-center
                    justify-start bg-blue-200'>
                        <h1 className='text-start mx-2 font-bold'>ข้อมูลทดสอบคอนกรีต</h1>
                    </div>
                <table className='w-full'>
                    <tbody className=' '>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>ยี่ห้อคอนกรีต	</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '></td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>Strength	</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>	26 ธ.ค. 2565 (14:02)</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>MIX No.	</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>	26 ธ.ค. 2565 (14:29)</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>ค่า Slump (ซม.)</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>CR-20</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>ปริมาณคอนกรีตสะสม (ม3)</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>	โบ-พงษ์เทพ คิดดีจริง</td>
                    </tr>
                
                    </tbody>
                </table>
            </div>
        
          </div>

          <CheckTab />

          <div className='overflow-x-auto my-2 '>  
              <table className=" w-full">
                  <thead className='bg-blue-200 rounded'>
                      <tr className=''>
                          <th className='p-5 text-sm  text-center border border-gray-700 '>คันที่เลขรถ	</th>
                          <th className='p-5 text-sm  text-center border border-gray-700 '>คอนกรีตต่อคัน (ม3)</th>
                          <th className='p-5 text-sm  text-center border border-gray-700 '>Slump17.5 - 20.0 (ซม.)	</th>
                          <th className='p-5 text-sm w-1/5 text-center border border-gray-700 '>รถออกจาก plant	</th>
                          <th className='p-5 text-sm w-1/5 text-center border border-gray-700 '>รถถึง site</th>
                          <th className='p-5 text-sm  text-center border border-gray-700 '>อนุมัติ Slump</th>
                          <th className='p-5 text-sm  text-center border border-gray-700 '>ปฏิเสธ</th>
                      </tr>
                  </thead>
                  <tbody className=' '>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1-71203</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>7.0</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>18.5</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1-71203</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>7.0</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>18.5</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1-71203</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>7.0</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>18.5</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>26 ธ.ค. 65(14:30)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td colSpan={1} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td colSpan={2} className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>ปริมาณคอนกรีตสะสม</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>67.250</td>
                              <td colSpan={4} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '>18.5</td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td colSpan={2} className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>New Quota (ม3) (B)</td>
                              <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>67.49</td>
                              <td colSpan={4} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>{'B >= A'}</td>
                          </tr>   
                  </tbody>
              </table>
          </div>

          {/* ps tab */}
          <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>{"เวลาที่รถคอนกรีตถึงไซต์ – เวลาที่รถคอนกรีตออกจาก plant > 3.5 ชั่วโมง"}</li>
                    <li className='text-sm'>รถคอนกรีตคันที่ 1 ไม่มีการตรวจสอบค่า Slump</li>
                    <li className='text-sm'>ไม่ได้ตรวจสอบค่า Slump ให้กับรถคอนกรีตทุกๆ 3 คัน</li>
                    <li className='text-sm'>ค่า Slump ไม่ได้อยู่ในช่วงที่กำหนด</li>
                    <li className='text-sm'>{"ปริมาณคอนกรีตสะสม > ปริมาณคอนกรีต New Quota"}</li>
                </div>
            </div>
        </div>
    </>
  )
}

export default Step9