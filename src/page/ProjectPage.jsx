import React , {useMemo , useEffect , useState } from 'react'
import { useLocation , Link , useNavigate } from 'react-router-dom';
import { MagnifyingGlassCircleIcon , CheckIcon , ClipboardDocumentCheckIcon ,ChartBarIcon } from '@heroicons/react/24/outline'

// import TableContent from '../components/tablecotent';
// import Progressbar from '../components/progressbar';
import Subnavbar from '../components/Subnavbar';

// stage icons
import { StageStep1 , StageStep11 ,StageOnRail } from '../components/StageIcon';





function useQuery() {
    const { search } = useLocation();
    
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const ButtonTypes = [
    {
        name: "เสร็จแล้ว",
        status:'1',
        color:"green"
    },
    {
        name: "ทำค้าง",
        status:'2',
        color:'blue'
    },
    {
        name: "เขียวแดง",
        status:'3',
        color:"yellow"
    },
    {
        name: "รอส่งERP",
        status:'4',
        color:"red"
    }
]


const projectListX = [
    {pileno:"PB-79",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:11:29"},
    {pileno:"PB-21",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:12:34"},
    {pileno:"PB-26",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:13:12"},
    {pileno:"PB-23",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:14:52"},
    {pileno:"PB-87",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:21:21"},
    {pileno:"PB-01",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:25:17"},
    {pileno:"PB-32",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:54:14"},
    {pileno:"PB-12",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:56:12"},
    {pileno:"PB-42",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:58:08"},
    {pileno:"PB-20",step1:"2",step2:"3",step3:"2",step4:"6",step5:"2",step6:"1",step7:"1",step8:"3",step9:"0",step10:"4",step11:"5",updated:"12/12/22 09:59:12"},
]



function ProjectPage() {
    const navigate = useNavigate();
    
    let query = useQuery();

    const id = query.get("projectid")
    console.log(query.get("projectid"))
    const filterbyQuery = query.get("type")
    console.log(query.get("type"))
    const handleClickOnStep = ({id,step}) => {
        // navigate(`/project/report?pileid${id}#scroll-target${step}`)
        navigate(`/project/report?pileid1#step8`)
    }
  
    const [ filter , setFilter] = useState(null);
    
    
    


    
    useEffect(() => {
        if (filterbyQuery !== null) {
            setFilter(filterbyQuery)
            console.log()
        }
        setFilter(null)
        console.log("filterquery =>",filter)
        
    }, [query]);

    useEffect(() => {
        console.log(filter)
    },[filter])



  return (
    <>
        <div className="w-full flex flex-col flex-grow h-screen relative lg:top-14 top-16">
            <div className='fixed top-[52px] w-full items-center mx-auto bg-blue-100 h-[50px] z-30 py-1  '>
                <Subnavbar titleback={false} isProjectPage={true}/>
                <div className='flex flex-col lg:flex-row mx-auto items-center py-2 bg-blue-100'>
                    {/* filter bar for pc */}
                    <div className=' w-1/3 justify-center hidden xl:flex mx-auto '>
                        <button onClick={() => {setFilter("ทำค้าง")}}                value={"ทำค้าง"}
                            className={`btn btn-primary mx-10 focus:bg-green-200
                            ${  filter === "ทำค้าง" ? "bg-blue-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ChartBarIcon className='w-4 h-4 relative left-0' /> ทำค้าง
                        </button>
                        <button onClick={() => {setFilter("เสร็จแล้้ว")}}                value={"เสร็จแล้ว"} 
                            className={`btn btn-primary mx-10 focus:bg-green-200
                            ${  filter === "เสร็จแล้้ว" ? "bg-green-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ClipboardDocumentCheckIcon className='w-4 h-4 relative left-0' /> เสร็จแล้ว
                        </button>
                        <button onClick={() => {setFilter("รอส่งerp")}}                value={"รอส่งerp"}
                            className={`btn btn-primary mx-10 focus:bg-red-200
                            ${  filter === "รอส่งerp" ? "bg-red-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <svg class={` rotate-45  -mt-1 w-4 h-4 text-red-500  duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> 
                               รอส่งerp
                        </button>
                        <button onClick={() => {setFilter("เขียวแดง")}}                value={"เขียวแดง"}
                            className={`btn btn-primary mx-10 focus:bg-yellow-200
                            ${  filter === "เขียวแดง" ? "bg-yellow-300" : "bg-white"  }
                             border border-gray-400 py-4 px-6 rounded-lg`}>
                                <svg className={`  w-4 h-4 text-amber-500  `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            เขียว-แดง
                        </button>
                    </div>
                    {/* search bar section */}
                    <div className='relative  xl:absolute xl:right-[5rem] flex  text-gray-700 mx-auto xl:mx-2'>
                        <input type={'search'} name="search" placeholder='search'
                            className='border-2 lg:w-full  border-gray-300 bg-white h-8  px-1 rounded-lg text-sm focus:outline-none'/>
                        <button type='submit' className='relative '>
                            <MagnifyingGlassCircleIcon onClick={() => console.log('click search')} className='w-8 h-8 ml-1 text-blue-600 hover:text-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-white' />
                        </button>
                    </div>

                    {/* filter bar for mobile */}
                    <div className=' justify-between flex xl:hidden mx-auto my-1 z-50'>
                        
                        <button onClick={() => {setFilter("ทำค้าง")}}                value={"ทำค้าง"}
                            className={`btn btn-primary mx-1 focus:bg-blue-200
                            ${  filter === "ทำค้าง" ? "bg-blue-300" : "bg-white"  } 
                            border border-gray-400 py-2 px-4 rounded-lg`}>
                                ทำค้าง
                        </button>
                        <button onClick={() => {setFilter("เสร็จแล้้ว")}}                value={"เสร็จแล้ว"} 
                            className={`btn btn-primary mx-1 focus:bg-green-200
                            ${  filter === "เสร็จแล้้ว" ? "bg-green-300" : "bg-white"  } 
                            border border-gray-400 py-2 px-4 rounded-lg`}>
                                เสร็จแล้ว
                        </button>
                        <button onClick={() => {setFilter("รอส่งerp")}}                value={"รอส่งerp"}
                            className={`btn btn-primary mx-1 focus:bg-red-200
                            ${  filter === "รอส่งerp" ? "bg-red-300" : "bg-white"  } 
                            border border-gray-400 py-2 px-4 rounded-lg`}>
                                รอส่งerp
                        </button>
                        <button onClick={() => {setFilter("เขียวแดง")}}                value={"เขียวแดง"}
                            className={`btn btn-primary mx-1 focus:bg-yellow-200
                            ${  filter === "เขียวแดง" ? "bg-yellow-300" : "bg-white"  }
                             border border-gray-400 py-2 px-4 rounded-lg`}>
                            เขียว-แดง
                        </button>
                        
                        
                    </div>
                </div>
            </div>


         
            {/* Body Container */}

            
            <div className='flex flex-1 mx-auto mt-10 lg:mt-4 pt-[60px]'>
                <main role="main" className="flex flex-col w-screen h-full  px-2 pt-[50px] lg:pt-[40px] mb-4">


                    {/* StatsBar container */}


                    {/* <div className='w-full lg:w-2/3  mx-auto'> 
                        <TableContent id={id}/>
                        <Progressbar id={id}/>
                    </div> */}
             

                    {/* Table container */}
                    
                    <div className='overflow-x-auto mx-0 lg:mx-auto '>  
                        <table className=" w-full overflow-x-auto">
                            <thead className='bg-blue-200'>
                                <tr>
                                    <th className='p-3 min-w-[80px] text-sm  text-center border border-gray-700 '>เลขที่เข็ม</th>
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
                                    <th className='p-3 text-sm  text-center border border-gray-700 '>วันที่ (ประวัติล่าสุด)</th>
                                </tr>
                            </thead>
                            <tbody>
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