import React from 'react'
import CheckTab from '../checktab'

const Step4 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            {/* <h1 className='text-3xl font-bold'>4. ทดสอบของเหลว</h1> */}

            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-white -t  flex items-center
            justify-start font-bold text-lg bg-blue-300'>
                <h1 className='mx-2'>ข้อมูลการทดสอบของเหลว</h1>
            </div>
            <table className='w-full'>
                <tbody className='bg-gray-100 '>
                <tr className=' border border-x border-white items-center text-start justify-between '>
                    <th className='p-2 lg:w-1/3 w-1/2 text-start border-r bg-orange-200 border-white'>ประเภทสารละลาย</th>
                    <td className='p-2 lg:w-2/3 w-1/2 text-start '>โพลิเมอร์</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            <CheckTab/>

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-300 '>
                    <tr>
                        <th rowSpan={2} className='p-5 text-sm  text-center border border-b-0 border-white '>ลำดับ</th>
                        <th className='px-2 py-1 text-sm  text-center border border-white '>pH</th>
                        <th className='px-2 py-1 text-sm  text-center border border-white '><pre>Density</pre><pre>(ก./มล.)</pre></th>
                        <th className='px-2 py-1 text-sm  text-center border border-white '><pre>Viscosity</pre><pre>(วินาที)</pre></th>
                        <th className='px-2 py-1 text-sm  text-center border border-white '><pre>Sand</pre><pre>%</pre></th>
                        <th rowSpan={2} className='px-2 py-1 text-sm  text-center border border-white '>วันและเวลา</th>
                        <th rowSpan={2} className='px-2 py-1  text-sm text-center border border-white '>ผู้ทดสอบ</th>
                    </tr>
                    <tr>
                      
                      <th className='px-2 py-1 text-sm  text-center border border-white '><pre className='mb-1 border-b border-white border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-white '><pre className='mb-1 border-b border-white border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-white '><pre className='mb-1 border-b border-white border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-white '><pre className='mb-1 border-b border-white border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                    

                    </tr>
                </thead>
                <tbody className='bg-gray-100 '>   
                        <tr  className="text-start border-y border-white -t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'>
                                <pre>
                                1.สารละลาย

                                </pre>
                                <strong>ก่อนเจาะ</strong>
                            </td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'><pre>3 ม.ค. 2566 (14:30)</pre><pre>3 ม.ค. 2566 (14:40)</pre></td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-white'><pre>โอ๋</pre>คาวี บอกแก้ว</td>
                        </tr>
                        <tr  className="text-start border-y border-white -t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'>
                                <pre>
                                2.<strong>ก่อนเทปูน</strong>

                                </pre>
                                ปากหลุม
                            </td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>1.01</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>55</pre>{"[>= 55]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>0.10</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'><pre>26 ธ.ค. 2565 (08:48)</pre><pre>26 ธ.ค. 2565 (08:48)</pre></td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-white'><pre>พัน</pre>ประพันธ์ พฤฒิพฤกษ์</td>
                        </tr>
                        <tr  className="text-start border-y border-white -t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'>
                                <pre>
                                3.<strong>ระหว่างเทปูน</strong>
                                </pre>
                                กลางหลุม
                            </td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>1.01</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>48</pre>{"[>= 55]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white ' ><pre className='border-b border-dashed border-white'>0.10</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-white'><pre>4 ม.ค. 2566 (17:31)</pre><pre>4 ม.ค. 2566 (17:33)</pre></td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-white'><pre>พัน</pre>ประพันธ์ พฤฒิพฤกษ์</td>
                        </tr>
                        
                </tbody>
            </table>
        </div>









        </div>
    </>
  )
}

export default Step4