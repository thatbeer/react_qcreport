import React , { useMemo , useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Step1 from '../components/details/step1'
import Step2 from '../components/details/step2'
import Step3 from '../components/details/step3'
import Step4 from '../components/details/step4'
import Step5 from '../components/details/step5'
import Step6 from '../components/details/step6'
import Step7 from '../components/details/step7'
import Step8 from '../components/details/step8'
import Step9 from '../components/details/step9'
import Step10 from '../components/details/step10'
import Step11 from '../components/details/step11'

import Subnavbar from '../components/Subnavbar';
import Statcard from '../components/Statcard';


const DetailPage = () => {
    const { search } = useLocation();

    const query = useMemo(
        () => new URLSearchParams(search) , [search]
    )
    
    console.log(query)

    const data = useMemo(
        () => [
            {
                col1:"hello",
                col2:"word"
            },
            {
                col1:"react",
                col2:"table"
            },
            {
                col1:"hello",
                col2:"word"
            },

        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header:"Column 1",
                accessor:"col1"
            },
            {
                Header:"Column 2",
                accessor:"col2"
            },
        ],
        []
    )

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const handleClick2Ref1 = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth' ,block: 'end'});
    };
    const handleClick2Ref2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref4 = () => {
        ref4.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref5 = () => {
        ref5.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref6 = () => {
        ref6.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref7 = () => {
        ref7.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref8 = () => {
        ref8.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref9 = () => {
        ref9.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref10 = () => {
        ref10.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref11 = () => {
        ref11.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
   
  return (
    <>
        <div className='fixed w-screen z-30 '>
            <Subnavbar />
            <div className="overflow-x-auto fixed min-h-6  left-0 px-1 py-1 bg-blue-100 border-b border-blue-300 w-screen z-20 ">
                <ul className='flex px-1 flex-row mx-auto items-center lg:justify-center sm:justify-start'>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref1}><a className='text-blue-800'>Step1</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref2}><a className='text-blue-800' >Step2</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref3}><a className='text-blue-800'>Step3</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref4}><a className='text-blue-800'>Step4</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref5}><a className='text-blue-800'>Step5</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref6}><a className='text-blue-800'>Step6</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref7}><a className='text-blue-800'>Step7</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref8}><a className='text-blue-800'>Step8</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref9}><a className='text-blue-800'>Step9</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref10}><a className='text-blue-800'>Step10</a></li>
                    <li className='p-2 hover:cursor-pointer   z-30' onClick={handleClick2Ref11}><a className='text-blue-800'>Step11</a></li>
                    
                </ul>
            </div>
        </div>
        <div className='mx-auto px-2 lg:my-0 my-2 flex flex-col w-full md:w-2/3 '>
            <div className='pt-[66px] lg:pt-[60px] '>
            {' '}
            {/* Search Container as SIDE BAR */}
                <div className='pt-[40px]'>
                    <Statcard className=""/>
                    <h1 ref={ref1}  className='text-3xl font-bold'>1. เตรียมโครงเหล็ก</h1>
                    <Step1    />
                    <hr className='my-2 '/>
                    <h1 ref={ref2}  className='text-3xl font-bold'>2. ปักเคสซิ่ง</h1>
                    <Step2 />
                    <hr className='my-2 '/>
                    <h1 ref={ref3}  className='text-3xl font-bold'>3. วัดตำแหน่งก่อนเจาะ</h1>
                    <Step3 />
                    <hr className='my-2 '/>
                    <h1 ref={ref4} className='text-3xl font-bold'>4. ทดสอบของเหลว</h1>
                    <Step4 />
                    <hr className='my-2 '/>
                    <h1 ref={ref5}  className='text-3xl font-bold'>5. เจาะเสาเข็ม</h1>
                    <Step5 />
                    <hr className='my-2 '/>
                    <h1 ref={ref6}  className='text-3xl font-bold'>6. เก็บตะกอน</h1>
                    <Step6 />
                    <hr className='my-2 '/>
                    <h1 ref={ref7} className='text-3xl font-bold'>7. ลงโครงเหล็ก</h1>
                    <Step7 />
                    <hr className='my-2 '/>
                    <h1 ref={ref8} className='text-3xl font-bold'>8. ลงท่อเทรมี่ / เม็ดโฟม</h1>
                    <Step8 />
                    <hr className='my-2 '/>
                    <h1 ref={ref9} className='text-3xl font-bold'>9. ทดสอบคอนกรีต</h1>
                    <Step9 />
                    <hr className='my-2 '/>
                    <h1  ref={ref10} className='text-3xl font-bold'>10. เทคอนกรีต</h1>
                    <Step10 />
                    <hr className='my-2 '/>
                    <h1  ref={ref11} className='text-3xl font-bold'>11. ถอนเคสซิ่ง</h1>
                    <Step11    /> 
                </div>
            </div >
        </div>
    </>
  )
}

export default DetailPage;