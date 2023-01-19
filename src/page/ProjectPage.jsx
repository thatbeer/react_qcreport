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
    const {state } = useLocation(); 
    console.log("pass props",state)
    const id = query.get("projectid")
    console.log("project id =>",query.get("projectid"))
    const filterbyQuery = query.get("type")
    // console.log(query.get("type"))
  
    const [ filter , setFilter] = useState(filterbyQuery);
    
    
    // on serach ffunction 
    const [onsearch, setOnsearch] = useState("");
    const [searchresult , setSearchResult] = useState([])

    const onSearchHandler = (event) => {
        const searchField = event.target.value.toLocaleLowerCase()
        setOnsearch(searchField);
    }
    const FetchData = ['x','y','z']
    // useEffect(() => {
    //     const newItems = FetchData.filter((data,index) => {
    //         return data.title.toLocaleLowerCase().includes(onsearch);
    //     });
        
    //     setSearchResult(newItems);
    

    // },[])


    
    // useEffect(() => {
    //     if (filterbyQuery !== null) {
    //         setFilter(filterbyQuery)
    //         console.log("filter state =>" , filter)
    //     }
    //     setFilter(null)
    //     console.log("filter state =>",filter)
        
    // }, [query]);

    useEffect(() => {
        console.log(filter)
        // console.log(onsearch)
    },[filter])



  return (
    <>
        <div className="w-full flex flex-col flex-grow h-screen relative lg:top-10 top-14 ">
            <div className='fixed top-[48px] w-full items-center mx-auto bg-blue-100 h-[30px] z-40  '>
                {/* -----------------------------------------------Sub Navigator----------------------------------------------- */}
                <Subnavbar titleback={false} isProjectPage={true} PName={state?.projName}/>
            </div>
            <div className='relative lg:top-[2.5rem] top-[26px] w-full items-center mx-auto bg-blue-100 h-[30px] z-30 py-2  '>




                {/* -----------------------------------------------Filter Container----------------------------------------------- */}
                <div className='flex flex-col lg:flex-row mx-auto items-center lg:pr-[8rem]  bg-blue-100 border-b-2 border-blue-600'>
                    {/* filter bar for pc */}
                    {/* <div className=' w-1/3 justify-center hidden lg:flex mx-auto '>
                        <button onClick={() => {setFilter("ทำค้าง")}}                value={"ทำค้าง"}
                            className={`btn btn-primary mx-10 focus:bg-sky-100
                            ${  filter === "ทำค้าง" ? "bg-blue-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ChartBarIcon className='w-4 h-4 relative left-0' /> ทำค้าง
                        </button>
                        <button onClick={() => {setFilter("เสร็จแล้ว")}}                value={"เสร็จแล้ว"} 
                            className={`btn btn-primary mx-10 focus:bg-green-200
                            ${  filter === "เสร็จแล้ว" ? "bg-green-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <ClipboardDocumentCheckIcon className='w-4 h-4 relative left-0' /> เสร็จแล้ว
                        </button>
                        <button onClick={() => {setFilter("รอส่งerp")}}                value={"รอส่งerp"}
                            className={`btn btn-primary mx-10 focus:bg-red-200
                            ${  filter === "รอส่งerp" ? "bg-red-300" : "bg-white"  } 
                            border border-gray-400 py-4 px-6 rounded-lg`}>
                               <svg className={` rotate-45  -mt-1 w-4 h-4 text-red-500  duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> 
                               รอส่งerp
                        </button>
                        <button onClick={() => {setFilter("เขียวแดง")}}                value={"เขียวแดง"}
                            className={`btn btn-primary mx-10 focus:bg-yellow-200
                            ${  filter === "เขียวแดง" ? "bg-yellow-300" : "bg-white"  }
                             border border-gray-400 py-4 px-6 rounded-lg`}>
                                <svg className={`  w-4 h-4 text-amber-500  `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            เขียว-แดง
                        </button>
                    </div> */}
                    {/* search bar section old lg:left-[6rem]*/}
                    <div className='relative py-2 lg:w-1/4 w-1/2 inline-0 flex lg:left-[8rem] text-gray-700 mx-auto '>
                        <input type={'search'} onChange={onSearchHandler} value={onsearch} name="search" placeholder='search'
                            className='border-2 w-full font-medium justify-end border-gray-300 bg-white h-8  px-2 rounded-lg focus:outline-none'/>
                        <button type='submit' className='relative '>
                            <MagnifyingGlassCircleIcon onClick={() => console.log('click search')} className='w-8 h-8 ml-1 text-blue-600 hover:text-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-white' />
                        </button>
                    </div>

                    {/* filter bar for mobile */}
                    <div className=' justify-between flex mx-auto my-1 z-50'>
                        
                        <button onClick={() => {setFilter("ทำค้าง")}} value={"ทำค้าง"}
                            className={`btn border-b-4 mx-1 focus:bg-blue-700  focus:border transtition-all duration-500
                            ${  filter === "ทำค้าง" ? "bg-blue-700 text-white border-none hover:bg-blue-700" : "bg-gray-100"  } 
                            border border-blue-700 py-2 px-2 rounded-lg focus:border-none focus:bg-blue-700`}>
                                <ClipboardDocumentCheckIcon className='w-4 h-4 relative -left-1' /> ทำค้าง
                        </button>
                        <button onClick={() => {setFilter("เสร็จแล้ว")}} value={"เสร็จแล้ว"} 
                            className={`btn border-b-4 mx-1 focus:bg-blue-700 focus:border transtition-all duration-500
                            ${  filter === "เสร็จแล้ว" ? "bg-blue-700 text-white border-none hover:bg-blue-700" : "bg-gray-100"  } 
                            border border-blue-700 py-2 px-2 rounded-lg focus:border-none focus:bg-blue-700`}>
                                 <ClipboardDocumentCheckIcon className='w-4 h-4 relative -left-1' />เสร็จแล้ว
                        </button>
                        <button onClick={() => {setFilter("รอส่งerp")}} value={"รอส่งerp"}
                            className={`btn border-b-4 mx-1 focus:bg-blue-700 focus:border transtition-all duration-500                           
                            ${  filter === "รอส่งerp" ? "bg-blue-700 text-white border-none hover:bg-blue-700" : "bg-gray-100"  } 
                            border border-blue-700 py-2 px-2 rounded-lg focus:border-none focus:bg-blue-700 `}>
                              <ClipboardDocumentCheckIcon className='w-4 h-4 relative -left-1' />   รอส่งerp
                        </button>
                        <button onClick={() => {setFilter("เขียวแดง")}} value={"เขียวแดง"}
                            className={`btn border-b-4 mx-1 focus:bg-blue-700 focus:border transtition-all duration-500 
                            ${  filter === "เขียวแดง" ? "bg-blue-700 text-white border-none hover:bg-blue-700" : "bg-gray-100"  }
                             border border-blue-700 py-2 px-2 rounded-lg focus:border-none focus:bg-blue-700`}>
                            <ClipboardDocumentCheckIcon className='w-4 h-4 relative -left-1' /> เขียว-แดง
                        </button>
                    </div>
                </div>
            </div>


         
            {/* -----------------------------------------------Table  Container----------------------------------------------- */}
            <div className='flex flex-1 mx-auto mt-14 lg:mt-3 pt-[2rem]'>
                <main role="main" className="flex flex-col w-screen h-full  px-2 pt-[50px] lg:pt-[50px] mb-4">
                    <div className='overflow-x-auto mx-0 lg:mx-auto '>  
                        <table className=" w-full overflow-x-auto border-2 border-white bg-gray-100">
                            <thead className='bg-white-600 text-blue-800 '>
                                <tr>
                                    <th className='p-2 lg:p-4  min-w-[80px] text-sm  text-center font-medium text-black '>เลขที่เข็ม</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`เตรียมโครงเหล็ก`}>Step1</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`ปักเคสซิ่ง`}  >Step2</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`วัดตำแหน่งก่อนเจาะ`}  >Step3</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`ทดสอบของเหลว`}  >Step4</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`เจาะเสาเข็ม`}  >Step5</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`เก็บตะกอน`}  >Step6</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`ลงโครงเหล็ก`}  >Step7</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`ลงท่อเทรมี่ / เม็ดโฟม`}  >Step8</th>
                                    <th className='px-1 text-sm  text-center hover:cursor-help 'title={`ทดสอบคอนกรีต`}  >Step9</th>
                                    <th className=' text-sm  text-center hover:cursor-help ' title={`เทคอนกรีต`} >Step10</th>
                                    <th className=' text-sm  text-center hover:cursor-help' title={`ถอนเคสซิ่ง`}  >Step11</th>
                                    <th className='p-2 text-sm  text-center text-black '>วันที่ (ประวัติล่าสุด)</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {/* Real table */}
                                { projectListX ? projectListX.map((list) => (
                                    <tr key={list.pileno}  className="text-center border-y-2 border-white rounded-t  my-auto items-center justify-center font-medium">
                                        <td className='p-3 mx-auto my-1 text-sm    '>
                                            <Link to={`/project/report?pileid=${list.pileno}`} title={`pileId${list.pileno}`} 
                                                 state={{...state}}
                                                className='hover:text-blue-400 hover:underline text-blue-600'>
                                                {list.pileno}
                                            </Link>
                                        </td>
                                        <td className='py-2 text-sm  text-center '>
                                            <Link tag={1} to={`/project/report?pileid=${list.pileno}`} title={`เตรียมโครงเหล็ก`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageStep1 status={list.step1} alt={"step1"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step2`} title={`ปักเคสซิ่ง`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step2} alt={"step2"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step3`} title={`วัดตำแหน่งก่อนเจาะ`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step3} alt={"step3"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step4`} title={`ทดสอบของเหลว`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step4} alt={"step4"} />
                                                </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step5`} title={`เจาะเสาเข็ม`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step5} alt={"step5"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step6`} title={`เก็บตะกอน`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step6} alt={"step6"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step7`} title={`ลงโครงเหล็ก`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step7} alt={"step7"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step8`} title={`ลงท่อเทรมี่ / เม็ดโฟม`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                               <StageOnRail status={list.step8} alt={"step8"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step9`} title={`ทดสอบคอนกรีต`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step9} alt={"step9"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step10`} title={`เทคอนกรีต`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageOnRail status={list.step10} alt={"step10"} />
                                            </Link>
                                        </td>
                                        <td className='py-1 text-sm  text-center   '>
                                            <Link to={`/project/report?pileid=${list.pileno}#step11`} title={`ถอนเคสซิ่ง`}
                                                state={{...state}}
                                                className='hover:text-blue-400 hover:underline'>
                                                <StageStep11 status={list.step11} alt={"step11"} />
                                            </Link>
                                        </td>
                                        <td className='p-3 mx-auto my-1 text-sm   '>
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