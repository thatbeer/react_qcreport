import React from 'react'
import CheckTab from '../checktab'

const Step4 = () => {
  return (
    <>
        <div className='flex flex-col'>
            {/* <h1 className='text-3xl font-bold'>4. ทดสอบของเหลว</h1> */}

            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold text-lg bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการทดสอบของเหลว</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 lg:w-1/3 w-1/2 text-start border-r bg-green-200 border-gray-600'>ประเภทสารละลาย</th>
                    <td className='p-2 lg:w-2/3 w-1/2 text-start '>โพลิเมอร์</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            <CheckTab/>

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr>
                        <th rowSpan={2} className='p-5 text-sm  text-center border border-b-0 border-gray-700 '>ลำดับ</th>
                        <th className='px-2 py-1 text-sm  text-center border border-gray-700 '>pH</th>
                        <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre>Density</pre><pre>(ก./มล.)</pre></th>
                        <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre>Viscosity</pre><pre>(วินาที)</pre></th>
                        <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre>Sand</pre><pre>%</pre></th>
                        <th rowSpan={2} className='px-2 py-1 text-sm  text-center border border-gray-700 '>วันและเวลา</th>
                        <th rowSpan={2} className='px-2 py-1  text-sm text-center border border-gray-700 '>ผู้ทดสอบ</th>
                    </tr>
                    <tr>
                      
                      <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre className='mb-1 border-b border-gray-400 border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre className='mb-1 border-b border-gray-400 border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre className='mb-1 border-b border-gray-400 border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                      <th className='px-2 py-1 text-sm  text-center border border-gray-700 '><pre className='mb-1 border-b border-gray-400 border-dashed'>ที่วัดได้</pre><pre>มาตราฐาน</pre></th>
                    

                    </tr>
                </thead>
                <tbody className=' '>   
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส</pre>กุศล อยู่เป็นสุข</td>
                        </tr>
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส-กุศล</pre> อยู่เป็นสุข</td>
                        </tr>
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className=' text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส-กุศล</pre> อยู่เป็นสุข</td>
                        </tr>
                        
                </tbody>
            </table>
        </div>









        </div>
    </>
  )
}

export default Step4