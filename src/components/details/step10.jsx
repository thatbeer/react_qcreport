import CheckTab from '../checktab';
import Gimage from '../../img/step10_plot01.png'

const itemsX = [
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    { id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },{ id: { first: "1", second: '741'}, cfconcrete: '6.0' , depthconFromtop: "-" , diameter:"-",tremyLength : "4.91" , Ncut:'0', cut:'4.91',left:'62',sinkAfterCut:'5',time: {start:'4 ม.ค. 2566 (15:48)',end:'4 ม.ค. 2566 (15:48)'},last: true },
    
];


const Step10 = () => {
    const isBoredPile = true;
  return (
    <>
        <div className='flex flex-col' >
            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-gray-600 rounded-t  flex items-center
                    justify-start  bg-blue-200'>
                        <h1 className='mx-2 text-start font-bold'>ข้อมูลการเทตอนกรีต</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className=' '>
                        <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                            <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r text-start bg-green-200 border-gray-600'>ชุดโฟร์แมน</th>
                            <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>ชุดที่ 5 ฤาษี-สำฤทธิ์</td>
                        </tr>
                        <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                            <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r text-start bg-green-200 border-gray-600'>โฟร์แมนควบคุมงาน</th>
                            <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>ประหยัด สืบเสาะเสมอ</td>
                        </tr>
                        <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                            <th className='px-2 py-1 text-sm w-1/2 lg:w-1/3 border-r text-start bg-green-200 border-gray-600'>สภาพอากาศ</th>
                            <td className='px-2 py-1 text-sm w-1/2 lg:w-2/3 text-start '>ท้องฟ้าปรอดโปร่ง</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <CheckTab />


            <div className='overflow-x-auto my-2 '>  
                <table className=" w-full">
                    <thead className='bg-blue-200 rounded'>
                        <tr>
                            <th rowSpan={2} className=' px-4 py-2 text-xs tracking-wide text-center border border-gray-700 divide-y '><pre>คันที่</pre>เลขที่รถ</th>
                            <th rowSpan={2} className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>คอนกรีตสะสม (ม3)</th>
                            <th rowSpan={2} className='px-4 py-2  text-xs tracking-widetext-center border border-gray-700 '>ความลึกคอนกรีตจากปากเคสซิ่ง(ม.)</th>
                            <th rowSpan={2} className='px-4 py-2  text-xs tracking-widetext-center border border-gray-700 '>ขนาดหน้าตัดที่คำนวณ (ม.)</th>
                            <th rowSpan={2} className='px-4 py-2  text-xs tracking-widetext-center border border-gray-700 '>ความยาวท่อเทรมี่จมหลังเท (ม.)</th>
                            <th rowSpan={2} className='px-4 py-2  text-xs tracking-widetext-center border border-gray-700 '>จำนวนที่ตัด (ท่อน)</th>
                            <th colSpan={3} className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>ความยาวท่อเทรที่ (ม.)</th>
                            <th colSpan={2} className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>เวลาเทคอนกรีต</th>
                        </tr>
                        <tr>
                        
                        <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>ที่ตัด</th>
                        <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>ที่เหลือ</th>
                        <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>ที่จมหลังตัด</th>
                        <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>เริ่ม-สิ้นสุด</th>
                        <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>คันสุดท้าย</th>
                        

                        </tr>
                    </thead>
                    <tbody className=' '>   
                            {/* <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '><pre>1</pre>1425</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>6.00</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>-</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>-</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>4.91</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>0</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>4.91</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>62</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>5</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '><pre>1</pre>1425</th>
                                <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '></th>
                            </tr> */}
                            
                            { itemsX.map((item,idx) => (
                                <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '><pre>{item.id.first}</pre>{item.id.second}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>{item.cfconcrete}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>{item.depthconFromtop}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>{item.diameter}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>{item.tremyLength}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>{item.Ncut}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>{item.cut}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>{item.left}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 bg-green-200'>{item.sinkAfterCut}</th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '><pre>{item.time.start}</pre><pre>{item.time.end}</pre></th>
                                    <th className='px-4 py-2 text-xs tracking-wide text-center border border-gray-700 '>{item.cut}</th>
                                </tr>
                            ))}
                            
                        
                            
                    </tbody>
                </table>
            </div>
            {/* ----------------------------------------------------------------------------------------- */}
            <div className='mx-auto w-full relative my-2 justify-between overflow-x-auto'>
                <table className='w-full'>
                    <tbody className='text-sm '>
                    <tr className=' justify-between  border border-x border-gray-600 '>
                        <td className='p-1 tex-sm border-r  bg-green-200 border-gray-600 tracking-wide'>Ø เฉลี่ย (ม.)</td>
                        <td className='p-1 tex-sm  border border-gray-600 text-start tracking-wide bg-green-400'>11</td>
                        <td className='pl-1 tex-sm border-r   bg-green-200 border-gray-600 tracking-wide'>คอนกรีตขึ้นทะเบียน (ม3)</td>
                        <td className='p-1 tex-sm border border-gray-600 text-start tracking-wide bg-green-400'>11</td>
                    </tr>
                    <tr className=' justify-between  border border-x border-gray-600 '>
                        <td className='p-1 tex-sm border-r  bg-green-200 border-gray-600 tracking-wide'>Ø ฟันข้าง(ม.)</td>
                        <td className='p-1 tex-sm  border border-gray-600 text-start tracking-wide '>11</td>
                        <td className='pl-1 tex-sm border-r   bg-green-200 border-gray-600 tracking-wide'>	คอนกรีต New Quota (ม3)</td>
                        <td className='p-1 tex-sm border border-gray-600 text-start tracking-wide'>11</td>
                    </tr>
                    <tr className=' justify-between  border border-x border-gray-600 '>
                        <td className='p-1 tex-sm border-r  bg-green-200 border-gray-600 tracking-wide'>น้ำหนักเหล็ก (กก.)	</td>
                        <td className='p-1 tex-sm  border border-gray-600 text-start tracking-wide '>11</td>
                        <td className='pl-1 tex-sm border-r   bg-green-200 border-gray-600 tracking-wide'>	ความสูงหัวเข็มก่อนถอนเคสซิ่ง (ม.)	</td>
                        <td className='p-1 tex-sm border border-gray-600 text-start tracking-wide'>66.6</td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div className='mx-auto w-full relative my-2'>
                <div className=' block '>
                    <div className='py-1 border border-gray-600 rounded-t  flex items-center
                    justify-start bg-blue-200'>
                        <h1 className='text-start mx-2 font-bold'>ข้อมูลคอนกรีตที่เหลือจากการเท</h1>
                    </div>
                    <table className='w-full'>
                        <tbody className=' '>
                        <tr className=' flex border-x  border-gray-600 items-center text-start justify-between '>
                            <td className='px-2 py-1 text-sm w-2/3 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>ปริมาณคอนกรีตที่เหลือ (ม3)</td>
                            <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start '>3.00</td>
                        </tr>
                        <tr className=' flex border  border-gray-600 items-center text-start justify-between '>
                            <td className='px-2 py-1 text-sm w-2/3 lg:w-1/3 text-start border-r bg-green-200 border-gray-600'>นำคอนกรีตที่เหลือไปใช้</td>
                            <td className='px-2 py-1 text-sm w-1/3 lg:w-2/3 text-start '>-</td>
                        </tr>
                    
                        
                        </tbody>
                    </table>
                </div>
            </div>



            {/* ----------------------------------------------Graph section---------------------------------------------- */}
            <div className='flex justify-center mx-auto text-center items-center'>
               
                
                        <div className='font-bold rotate-[270deg] text-sm w-auto h-full text-center justify-center items-center'>
                       
                             Depth from T.C.L.(m.)
                            

                        </div>
                   
                    <div className='flex flex-col'>
                        <div className='font-bold'>Concrete Volume (m<sup>3</sup>).</div>
                        <article>
                            <img src={Gimage} alt="step11-graph" className='block items-center'/>
                        </article>

                    </div>
                


            </div>


            {/* ps tab */}
            {/* Bore pile */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ช่องข้อมูลในตารางเทคอนกรีตจะเป็นสีแดงถ้าพบว่า:</h1>
                    <li className='text-sm'>ตัดท่อเทรมี่มากกว่า 2 ท่อน</li>
                    <li className='text-sm'>ท่อเทรมี่จมในคอนกรีตเกิน 12 ม.</li>
                    <li className='text-sm'>ความยาวท่อเทรมี่จมหลังตัดน้อยกว่า 3 ม.</li>
                    <li className='text-sm'>ขนาดหน้าตัดที่คำนวณ น้อยกว่า 95% ของขนาดเสาเข็ม</li>
                    <li className='text-sm'>ขนาดหน้าตัดเฉลี่ยน้อยกว่า 97% ของขนาดเสาเข็ม</li>
                    <li className='text-sm'>{"ปริมาณคอนกรีตขึ้นทะเบียน > ปริมาณคอนกรีต New Quota"}</li>
                </div>
            </div>
            {/* DW */}
            
        </div>
    </>
  )
}

export default Step10