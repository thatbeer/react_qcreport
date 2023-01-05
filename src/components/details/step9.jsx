import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'

const Step9 = () => {
    const isBoredPile = true;
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
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>โออาร์ซี</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>Strength	</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>350 CY</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>MIX No.	</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>PYB4026DC1</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>ค่า Slump (ซม.)</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>17.5 - 22.5</td>
                    </tr>
                    <tr className=' border border-x border-gray-600 items-center text-start justify-between '>
                        <th className='py-1 px-2 w-1/2 lg:w-1/3 border-r text-start text-sm bg-green-200 border-gray-600'>ปริมาณคอนกรีตสะสม (ม3)</th>
                        <td className='py-1 px-2 w-1/2 lg:w-2/3 text-start '>	63.25</td>
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
                          <th className='px-3 py-2 text-sm  text-center border border-gray-700 '>คันที่เลขรถ	</th>
                          <th className='px-3 py-2 text-sm  text-center border border-gray-700 '>คอนกรีตต่อคัน (ม3)</th>
                          <th className='px-3 py-2 text-sm  text-center border border-gray-700 '>Slump17.5 - 20.0 (ซม.)	</th>
                          <th className='px-3 py-2 text-sm w-1/5 text-center border border-gray-700 '>รถออกจาก plant	</th>
                          <th className='px-3 py-2 text-sm w-1/5 text-center border border-gray-700 '>รถถึง site</th>
                          <th className='px-3 py-2 text-sm  text-center border border-gray-700 '>อนุมัติ Slump</th>
                          <th className='px-3 py-2 text-sm  text-center border border-gray-700 '>ปฏิเสธ</th>
                      </tr>
                  </thead>
                  <tbody className=' '>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                <strong>1</strong>
                                <pre>741</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>7.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 text-white '>20</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>2</strong>
                                <pre>949</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>7.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>4</strong>
                                <pre>731</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>7.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>5</strong>
                                <pre>741</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.30</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  bg-green-400 text-white'>19.0</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>6</strong>
                                <pre>750</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>7</strong>
                                <pre>949</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>8</strong>
                                <pre>731</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 text-white '>19.0</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>9</strong>
                                <pre>741</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                              <strong>10</strong>
                                <pre>750</pre>
                                </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>6.00</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  bg-green-400 text-white'>19</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-400 text-white'>
                                26 ธ.ค. 65
                                <pre>(14:30)</pre>
                              </td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>-</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                          </tr>
                       
                          
                          {/* summarize */}
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td colSpan={2} className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>ปริมาณคอนกรีตสะสม</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 text-white  '>63.2500</td>
                              <td colSpan={4} className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 text-white '>ไม่เกินโควต้า</td>
                          </tr>
                          <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                              <td colSpan={2} className='px-2 py-3 mx-auto my-1 text-sm  border-x border-gray-700  '>New Quota (ม3) (B)</td>
                              <td className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>64.4200</td>
                              <td colSpan={4} className='px-2 py-3 mx-auto my-1 text-sm  border-r border-gray-700  '>{'B >= A'}</td>
                          </tr>   
                  </tbody>
              </table>
          </div>

          {/* ps tab */}
          <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    { isBoredPile ? 
                        <>
                            <li className='text-sm'>{"เวลาที่รถคอนกรีตถึงไซต์ – เวลาที่รถคอนกรีตออกจาก plant > 3.5 ชั่วโมง"}</li>
                            <li className='text-sm'>รถคอนกรีตคันที่ 1 ไม่มีการตรวจสอบค่า Slump</li>
                            <li className='text-sm'>ไม่ได้ตรวจสอบค่า Slump ให้กับรถคอนกรีตทุกๆ 3 คัน</li>
                            <li className='text-sm'>ค่า Slump ไม่ได้อยู่ในช่วงที่กำหนด</li>
                            <li className='text-sm'>{"ปริมาณคอนกรีตสะสม > ปริมาณคอนกรีต New Quota"}</li>
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Step9