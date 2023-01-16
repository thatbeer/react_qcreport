import React from 'react'
import CheckTab from '../checktab'
import { CheckIcon } from '@heroicons/react/24/outline'
import RedGreenIcon from '../../utils/R-G-Icons'


const Step8 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col'>
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-white  bg-gray-200 flex items-center
                    justify-start bg-blue-500 text-white'>
                        <h1 className="mx-2 font-bold">ข้อมูลการลงโครงเหล็ก</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className='bg-gray-100 '>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>วันที่เริ่ม</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm  '>4 ม.ค. 2566 (15:11)</td>
                        </tr>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>วันที่เสร็จ	</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm '>4 ม.ค. 2566 (15:46)</td>
                        </tr>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>เครื่องจักร/เครน No.	</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm  '>CR-31</td>
                        </tr>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ผู้ขับ</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm '>รั้ว พัดภู่</td>
                        </tr>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ใส่เม็ดโฟมแล้ว</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm '><RedGreenIcon color="green" pass="1" className='w-5 h-5'/></td>
                        </tr>
                        <tr className='  border border-x border-white '>
                            <th className='p-1 w-1/2 lg:w-1/3 text-start text-sm border-r bg-orange-200 border-white'>ความยาวท่อเทรมีรวม (ม.)</th>
                            <td className='p-1 w-1/2 lg:w-2/3 text-start text-sm bg-green-600 text-white '>68.23</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


           
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความยาวท่อเทรมี่รวม<span className=' underline'>ไม่ได้</span>อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    { isBoredPile ? 
                        <>
                            {/* boredpile */}
                            <li className='text-sm'>{"[ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน) - 1.5 ม.] < [ความยาวท่อเทรมีรวม] < [ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน)]"}</li>
                        </>
                        :
                        <>
                            {/* dwall */}
                            <li className='text-sm'>{"[ ความลึกวัดจากท็อปไกด์วอลล์ ของการเจาะครั้งสุดท้าย - 1.00 ม. ] < [ ความยาวท่อเทรมีรวม ] < [ ความลึกวัดจากท็อปไกด์วอลล์ ของการเจาะครั้งสุดท้าย ]"}</li>
                        </>
                    }
                </div>
            </div>
            <CheckTab />
            <div className='overflow-x-auto my-2 '>  
                <table className=" w-full">
                    <thead className='bg-blue-500 text-white rounded'>
                        <tr className=''>
                            <th className='px-3 py-2 text-sm w-1/6 text-center border border-white '>ลำดับ</th>
                            <th className='px-3 py-2 text-sm w-1/4 text-center border border-white '>ขนาดท่อ(นิ้ว)</th>
                            <th className='px-3 py-2 text-sm w-1/4 text-center border border-white '>ความยาว(ม.)</th>
                            <th className='px-3 py-2 text-sm w-1/4 text-center border border-white '>ท่อสุดท้าย</th>
                        </tr>
                    </thead>
                    <tbody className=' '>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>2.20</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white relative justify-center '><RedGreenIcon pass="1" color="green" className='mx-auto w-5 h-5'/></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>11</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.00</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>9</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.00</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>8</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.00</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>7</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.00</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>6</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.00</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>5</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.01</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>4</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.02</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>3</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.05</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>2</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>6.08</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                            <tr  className="text-center border-y border-white  bg-gray-200 my-auto items-center justify-center">
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-x border-white  bg-gray-200'>1</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white bg-green-600 text-white '>12</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200'>5.87</td>
                                <td className='px-2 py-1 mx-auto my-1 text-sm  border-r border-white  bg-gray-200  '></td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความยาวท่อเทรมี่รวมไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    <li className='text-sm'>{"กรณีเสาเข็มมีขนาด ∅ > 1 ม. ควรใช้ขนาดท่อเทรมี่ ∅ ≥ 10 นิ้ว"}</li>
                </div>
            </div>
        </div>
    </>
  )
}

export default Step8