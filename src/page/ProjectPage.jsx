import React , {useMemo} from 'react'
import { useLocation , Link } from 'react-router-dom';
import { MagnifyingGlassCircleIcon , CheckIcon } from '@heroicons/react/24/outline'
import TableContent from '../components/tablecotent';
import Progressbar from '../components/progressbar';
import { StepBarUse } from '../components/StepBar';


function useQuery() {
    const { search } = useLocation();
    
    return React.useMemo(() => new URLSearchParams(search), [search]);
}



function ProjectPage() {

    let query = useQuery();

    const id = query.get("pileid")
    console.log(query.get("pileid"))

    if (id == null) {
        return <h1>None</h1>
    }


  return (
    <>
        <div className="w-full flex flex-col flex-grow h-screen relative lg:top-14 top-16">
            <div className='fixed top-[55px] w-full items-center mx-auto bg-blue-100 h-[50px] z-30 py-1  '>
                <div className='flex flex-col lg:flex-row mx-auto items-center py-2 bg-blue-100'>
                    {/* filter bar for pc */}
                    <div className=' w-1/3 justify-center hidden lg:flex mx-auto '>
                        <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter1</button>
                        <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter2</button>
                        <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter3</button>
                        <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter4</button>
                    </div>

                    {/* search bar section */}
                    <div className='relative flex  text-gray-700 mx-auto lg:mx-2'>
                        <input type={'search'} name="search" placeholder='search'
                            className='border-2 lg:w-full  border-gray-300 bg-white h-8  px-1 rounded-lg text-sm focus:outline-none'/>
                        <button type='submit' className='relative '>
                            <MagnifyingGlassCircleIcon onClick={() => console.log('click search')} className='w-8 h-8 ml-1 hover:text-white' />
                        </button>
                    </div>

                    {/* filter bar for mobile */}
                    <div className=' justify-between flex lg:hidden mx-auto my-1 '>
                        <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter1</button>
                        <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter2</button>
                        <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter3</button>
                        <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter4</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 mx-auto mt-4 lg:mt-4'>
                <main role="main" className="flex flex-col w-screen h-full  px-2  pt-[64px] mb-4">
                    <div className='w-full lg:w-2/3  mx-auto'> 
                        {/* <TableContent id={id}/> */}
                        <Progressbar id={id}/>
                    </div>
                    <div className='overflow-x-auto mx-0 lg:mx-auto '>  
                        <table className=" w-full overflow-x-auto">
                            <thead className='bg-blue-200 rounded'>
                                <tr>
                                    <th className='p-5 text-sm  text-center border border-gray-700 '>PileNo.</th>
                                    {/* <th colSpan={11} className='p-5 text-sm  text-center border border-gray-700 '>Step</th> */}
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step1</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step2</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step3</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step4</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step5</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step6</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step7</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step8</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step9</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step10</th>
                                    <th className='p-5 text-sm  text-center border-t border-gray-700  '>Step11</th>
                                    <th className='p-5 text-sm  text-center border border-gray-700 '>Updated</th>
                                </tr>
                            </thead>
                            <tbody className=' '>
                                {/* Row */}
                                <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    {/* <td colSpan={11} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>XXX</td> */}
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=1" className='hover:text-blue-400 hover:underline'>Step1</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=2" className='hover:text-blue-400 hover:underline'>Step2</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=3" className='hover:text-blue-400 hover:underline'>Step3</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=4" className='hover:text-blue-400 hover:underline'>Step4</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=5" className='hover:text-blue-400 hover:underline'>Step5</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=6" className='hover:text-blue-400 hover:underline'>Step6</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=7" className='hover:text-blue-400 hover:underline'>Step7</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=8" className='hover:text-blue-400 hover:underline'>Step8</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=9" className='hover:text-blue-400 hover:underline'>Step9</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=19" className='hover:text-blue-400 hover:underline'>Step10</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=11" className='hover:text-blue-400 hover:underline'>Step11</Link>
                                    </td>
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr>
                                {/* Row */}
                                <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    {/* <td colSpan={11} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>XXX</td> */}
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=1">Step1</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=2">Step2</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=3">Step3</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=4">Step4</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=5">Step5</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=6">Step6</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=7">Step7</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=8">Step8</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=9">Step9</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=19">Step10</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=11">Step11</Link>
                                    </td>
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr>
                                {/* Row */}
                                <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    {/* <td colSpan={11} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>XXX</td> */}
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=1">Step1</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=2">Step2</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=3">Step3</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=4">Step4</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=5">Step5</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=6">Step6</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=7">Step7</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=8">Step8</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=9">Step9</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=19">Step10</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=11">Step11</Link>
                                    </td>
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr>
                                {/* Row */}
                                <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    {/* <td colSpan={11} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>XXX</td> */}
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=1">Step1</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=2">Step2</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=3">Step3</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=4">Step4</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=5">Step5</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=6">Step6</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=7">Step7</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=8">Step8</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=9">Step9</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=19">Step10</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=11">Step11</Link>
                                    </td>
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr>
                                {/* Row */}
                                <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    {/* <td colSpan={11} className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>XXX</td> */}
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=1">Step1</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=2">Step2</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=3">Step3</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=4">Step4</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=5">Step5</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=6">Step6</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=7">Step7</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=8">Step8</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=9">Step9</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=19">Step10</Link>
                                    </td>
                                    <td className='p-5 text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26&step=11">Step11</Link>
                                    </td>
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr>
                                
                                
                                      
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='w-full '> 
                        <div className='overflow-x-auto my-2 '>  
                            <table className=" w-full">
                                <thead className='bg-blue-200 rounded'>
                                    <tr className=''>
                                        <th className='p-5 text-sm w-1/6 text-center border border-gray-700 '>ลำดับ</th>
                                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ขนาดท่อ(นิ้ว)</th>
                                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ความยาว(ม.)</th>
                                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ท่อสุดท้าย</th>
                                    </tr>
                                </thead>
                                <tbody className=' '>
                                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>13</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 '>10</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>1.10</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 relative justify-center '><CheckIcon className='mx-auto w-5 h-5'/></td>
                                        </tr>
                                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-400 '>10</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>6.10</td>
                                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700    '></td>
                                        </tr>
                                        
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </main>
            </div>
        </div>
    </>
  )
}

export default ProjectPage