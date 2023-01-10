import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'
import working from '../../img/workingtime.png'
import calendar from '../../img/calendartime.png'




const Step11 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col mb-6'>
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-gray-600   flex items-center
                    justify-start font-bold  bg-blue-300'>
                        <h1 className=' mx-2'>ข้อมูลถอนเคสซิ่ง</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-100 '>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>วันที่เริ่ม</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (18:01)</td>
                            
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>วันที่เสร็จ	</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>4 ม.ค. 2566 (18:07)</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>เครื่องจักร/เครน No.	</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>CR-31</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>ไวโบรแฮมเมอร์ No.</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>VH-14</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>ผู้ขับ</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>รั้ว พัดภู่</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>ความลึกคอนกรีต วัดจากผิวดิน (ม.)</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>11.790</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1   w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>ความสูงหัวเข็มหลังถอนเคสซิ่ง (ม.)</th>
                            {/* ##### RED GREEN */}
                            <td className='px-2 py-1   w-1/2 lg:w-2/3 text-start  bg-rose-400'>1.900</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>ระยะเยิ้มตัวของคอนกรีต (ม.)</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>-</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600'>เช็คลูกดิ่ง</th>
                            <td className='px-2 py-1 w-1/2 lg:w-2/3 text-start '>Yes</td>
                        </tr>
                        <tr className='  border border-x border-gray-600 text-sm '>
                            <th className='px-2 py-1 w-1/2 lg:w-1/3 text-start border-r bg-orange-200 border-gray-600 '>เช็คระดับน้ำ</th>
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

            {/* Graph container */}

            <div className='mx-auto border border-gray-700 w-auto min-w-full h-auto relative my-2 justify-center'>
                <div className='mx-auto bg-blue-300 h-10 border-b border-gray-700'>
                    <h1 className='mx-2 py-1 text-bold'>กราฟเปรียบเทียบเวลาการทำงาน และ ความลึก</h1>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-center my-2  '>
                    <div className='flex flex-col items-start justify-center my-2 w-full lg:w-4/6'>
                        <img src={working}  alt="working time"  />
                        <img src={calendar}  alt="calendar time" />
                    </div>
                    <div className='relative lg:w-1/2 px-2'>
                        <table className='text-xs'>
                            <thead>
                                <tr>
                                    <th className='px-3 py-2 bg-white border border-white' colSpan={3}></th>
                                    <th className='px-3 py-2 bg-orange-200 border-2 border-white'>Start Date <br/> - <br/>End Date</th>
                                    <th className='px-3 py-2 bg-orange-200 border-2 border-white'>Start Time <br/> - <br/>End Time</th>
                                    <th className='px-3 py-2 bg-orange-200 border-2 border-white'>Total Time <br/>(min.)<br/></th>
                                    <th className='px-3 py-2 bg-orange-200 border-2 border-white'>Depth<br/>(m.)<br/></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>1</td>
                                    <td className='p-2 border-2 border-white bg-gray-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>เตรียมโครงเหล็ก</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200 px-2 py-2 '>2</td>
                                    <td className='p-2 border-2 border-white bg-yellow-100  '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200 w-auto'>ปักเคสซิ่ง</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>20/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>13:13<br/>-<br/>13:19</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>6</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>0.00</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>3</td>
                                    <td className='p-2 border-2 border-white bg-gray-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>วัดตำแหน่งก่อนเจาะ</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>4</td>
                                    <td className='p-2 border-2 border-white bg-gray-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>ทดสอบของเหลว</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>5</td>
                                    <td className='p-2 border-2 border-white bg-red-600 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>เจาะเสาเข็ม - Auger</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>11:00<br/>-<br/>11:22</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>22</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>15.00</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>5</td>
                                    <td className='p-2 border-2 border-white bg-red-600 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>เจาะเสาเข็ม - Bucket</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>12:06<br/>-<br/>14:00</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>114</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>49.00</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>6</td>
                                    <td className='p-2 border-2 border-white bg-red-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>รอเก็บตะกอน และ เก็บตะกอน</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>14:00<br/>-<br/>14:50</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>50</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>49.20</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>7</td>
                                    <td className='p-2 border-2 border-white bg-purple-500 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>ลงโครงเหล็ก</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>15:00<br/>-<br/>15:17</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>17</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>49.20</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>8</td>
                                    <td className='p-2 border-2 border-white bg-brown-500 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>ลงท่อเทรมี่</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>15:20<br/>-<br/>15:38</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>18</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>49.20</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>9</td>
                                    <td className='p-2 border-2 border-white bg-amber-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>ทดสอบคอนกรีต</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>10</td>
                                    <td className='p-2 border-2 border-white bg-green-500 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>เทคอนกรีต</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>15:49<br/>-<br/>16:30</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>41</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>49.20</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'>11</td>
                                    <td className='p-2 border-2 border-white bg-yellow-800 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>เทคอนกรีต</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>23/08/65</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>16:35<br/>-<br/>16:40</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>5</td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>0.00</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white bg-orange-200'></td>
                                    <td className='p-2 border-2 border-white bg-amber-200 '></td>
                                    <td className='p-2 border-2 border-white text-sm bg-orange-200  w-auto'>Waiting Time</td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>   
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'></td>
                                </tr>
                                <tr>
                                    <td className='p-2 border-2 border-white '></td>
                                    <td className='p-2 border-2 border-white  '></td>
                                    <td className='p-2 border-2 border-white '></td>
                                    <td className='p-2 border-2 border-white '></td>
                                    <td className='p-2 border-2 border-white '></td>
                                    <td className='p-2 border-2 border-white bg-gray-200  text-center'>273</td>   
                                    <td className='p-2 border-2 border-white '></td>
                                </tr>
                                
                              
                                
                            </tbody>
                        </table>

                    </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default Step11