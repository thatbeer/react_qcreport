import React , {useMemo } from 'react'
import { useLocation , Link , useNavigate } from 'react-router-dom';
import { MagnifyingGlassCircleIcon , CheckIcon } from '@heroicons/react/24/outline'
import TableContent from '../components/tablecotent';
import Progressbar from '../components/progressbar';
import { StepBarUse } from '../components/StepBar';
import Subnavbar from '../components/Subnavbar';
import WaitingStage from '../img/S020A.png';
import WaitingStep1 from '../img/S010A.png';
import WaitingStep11 from '../img/S110A.png';
import DoneStep1 from '../img/S012A.png'
import DoneStepp11 from '../img/S112A.png'
import DoneStep from '../img/S022A.png'
// stage icons
import { StageStep1 , StageStep11 ,StageOnRail } from '../components/StageIcon';




function useQuery() {
    const { search } = useLocation();
    
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const projectListX = [
    {pileno:"PB-79",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:11:29"},
    {pileno:"PB-21",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:12:34"},
    {pileno:"PB-26",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:13:12"},
    {pileno:"PB-23",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:14:52"},
    {pileno:"PB-26",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:21:21"},
    {pileno:"PB-01",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:25:17"},
    {pileno:"PB-32",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:54:14"},
    {pileno:"PB-12",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:56:12"},
    {pileno:"PB-42",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:58:08"},
    {pileno:"PB-20",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:59:12"},
]


// const images = [
//     {id : "1" , alt:"step1" , status:"0",src:"../img/S010A.png"},
// ]


// const findIconId = (id) => {
//     return images.find(image => image?.id === id )
// }

// const Icons = ({id}) => {
//     const image = images.find(image => image?.id === id )
//     return (
//         <img src={image.src} alt={image.alt} className='w-12 h-10'/>
//     )
// }

function ProjectPage() {
    const navigate = useNavigate();

    let query = useQuery();

    const id = query.get("projectid")
    console.log(query.get("projectid"))
  

    
    const handleClickOnStep = ({id,step}) => {
        // navigate(`/project/report?pileid${id}#scroll-target${step}`)
        navigate(`/project/report?pileid1#step8`)
    }
    



  return (
    <>
        <div className="w-full flex flex-col flex-grow h-screen relative lg:top-14 top-16">
            <div className='fixed top-[52px] w-full items-center mx-auto bg-blue-100 h-[50px] z-30 py-1  '>
                <Subnavbar titleback={false} isProjectPage={true}/>
                <div className='flex flex-col lg:flex-row mx-auto items-center py-2 bg-blue-100'>
                    {/* filter bar for pc */}
                    <div className=' w-1/3 justify-center hidden lg:flex mx-auto '>
                        <button className='btn btn-primary mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter1</button>
                        <button className='btn btn-primary mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter2</button>
                        <button className='btn btn-primary mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter3</button>
                        <button className='btn btn-primary mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter4</button>
                    </div>
                    {/* search bar section */}
                    <div className='relative lg:absolute lg:right-[7.5rem] flex  text-gray-700 mx-auto lg:mx-2'>
                        <input type={'search'} name="search" placeholder='search'
                            className='border-2 lg:w-full  border-gray-300 bg-white h-8  px-1 rounded-lg text-sm focus:outline-none'/>
                        <button type='submit' className='relative '>
                            <MagnifyingGlassCircleIcon onClick={() => console.log('click search')} className='w-8 h-8 ml-1 text-blue-600 hover:text-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-white' />
                        </button>
                    </div>

                    {/* filter bar for mobile */}
                    <div className=' justify-between flex lg:hidden mx-auto my-1 '>
                        <button className='btn btn-primary mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter1</button>
                        <button className='btn btn-primary mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter2</button>
                        <button className='btn btn-primary mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter3</button>
                        <button className='btn btn-primary mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter4</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 mx-auto mt-10 lg:mt-4 pt-[64px]'>
                <main role="main" className="flex flex-col w-screen h-full  px-2  pt-[64px] mb-4">
                    <div className='w-full lg:w-2/3  mx-auto'> 
                        {/* <TableContent id={id}/> */}
                        {/* <Progressbar id={id}/> */}
                            {/* {projectListX.map((list) => (
                                <div>
                                    <li>{list.pileno}</li>
                                    <li>{list.step1 ? <p>dsadad</p> : <p>False</p>}</li>
                                </div>
                            ))} */}
                    </div>
             
                    
                    <div className='overflow-x-auto mx-0 lg:mx-auto '>  
                        <table className=" w-full overflow-x-auto">
                            <thead className='bg-blue-200 rounded'>
                                <tr>
                                    <th className='p-3 text-sm  text-center border border-gray-700 '>PileNo.</th>
                                    {/* <th colSpan={11} className='p-5 text-sm  text-center border border-gray-700 '>Step</th> */}
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step1</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step2</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step3</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step4</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step5</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step6</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step7</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step8</th>
                                    <th className='px-1 text-sm  text-center border-t border-gray-700  '>Step9</th>
                                    <th className=' text-sm  text-center border-t border-gray-700  '>Step10</th>
                                    <th className=' text-sm  text-center border-t border-gray-700  '>Step11</th>
                                    <th className='p-3 text-sm  text-center border border-gray-700 '>Updated</th>
                                </tr>
                            </thead>
                            <tbody className=' '>
                                {/* Row */}
                                {/* <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                    <td className='p-5 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                        <Link to="/project/report?pileid=26" className='hover:text-blue-400 hover:underline'>
                                            PB-26
                                        </Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700'>
                                        <Link tag={1} to={`/project/report?pileid=1`} className='hover:text-blue-400 hover:underline'><img src={WaitingStep1} alt="step1"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step2" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step2"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step3" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step3"></img></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step4" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step4"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step5" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step5"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=1#step6" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step6"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step7" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step7"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step8" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step8"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step9" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step9"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step19" className='hover:text-blue-400 hover:underline'><img src={WaitingStage} alt="step10"/></Link>
                                    </td>
                                    <td className=' text-sm  text-center border-t border-gray-700  '>
                                        <Link to="/project/report?pileid=26#step11" className='hover:text-blue-400 hover:underline'><img src={WaitingStep11} alt="step11"/></Link>
                                    </td>
                                    <td className=' mx-auto my-1 text-sm  border-x border-gray-700  '>12/12/22 09:11:11</td>
                                </tr> */}
                                {/* Real table */}
                                { projectListX ? projectListX.map((list) => (
                                    <tr key={list.pileno}  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                                        <td className='p-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}`} title={`pileId${list.pileno}`} className='hover:text-blue-400 hover:underline'>
                                                {list.pileno}
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700'>
                                            <Link tag={1} to={`/project/report?pileid=${list.pileno}`} title={`step1`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageStep1 status={list.step1} alt={"step1"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step2`} title={`step2`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step2} alt={"step2"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step3`} title={`step3`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step3} alt={"step3"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step4`} title={`step4`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step4} alt={"step4"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step5`} title={`step5`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step5} alt={"step5"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step6`} title={`step6`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step6} alt={"step6"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step7`} title={`step7`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step7} alt={"step7"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step8`} title={`step8`}
                                            className='hover:text-blue-400 hover:underline'>
                                               <StageOnRail status={list.step8} alt={"step8"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step9`} title={`step9`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step9} alt={"step9"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step19`} title={`step10`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step10} alt={"step10"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center border-t border-gray-700  '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step11`} title={`step11`}
                                            className='hover:text-blue-400 hover:underline'>
                                                <StageStep11 status={list.step11} alt={"step11"} />
                                            </Link>
                                        </td>
                                        <td className='p-3 mx-auto my-1 text-sm  border-x border-gray-700  '>
                                            {list.updated}
                                        </td>
                                    </tr>
                                ))
                                    :
                                    null
                                }      
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    </>
  )
}

export default ProjectPage