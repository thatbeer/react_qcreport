import { Link } from "react-router-dom";
import Dropdownlist from "./Dropdownlist";
import Progressbar from "./progressbar";
import Statcard from "./Statcard";
import { FingerPrintIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
//demo with using plain tailwindcss
function MyComponent(props) {
    const [ valueI , setValueI] = useState("");

    return (
      <select className="form-select">
        <option value="">Select an option</option>
        <option value="option1"><Link to={`/project}`}> 1</Link></option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    );
}

function MyRatio(props) {
    return (
      <button className="relative inline-flex w-4 h-4 rounded-full">
        <span className="sr-only">Filter</span>
        <span className="relative block w-full h-full rounded-full bg-gray-300"></span>
        <span className="relative block w-full h-full rounded-full bg-gray-300"></span>
      </button>
    );
}

function ButtonGroup(props) {
    return (
        <div className="btn-group">
            <input type="radio" name="options" data-title="1" className="btn" />
            <input type="radio" name="options" data-title="2" className="btn" checked />
            <input type="radio" name="options" data-title="3" className="btn" />
            <input type="radio" name="options" data-title="4" className="btn" />
        </div>
    )
}

// was width:660px
const Maincard = (props) => {
    
    const {projectid , projName , erp , coin , zone} = props
    return (
        <>
            <div className="relative px-2 py-1  w-screen lg:w-[800px] mx-2  h-auto 
                            shadow-none hover:shadow-lg rounded-lg hover:bg-blue-200 transition-all duration-300">
                <div className="w-full bg-white-100 py-2 px-2 rounded-lg border border-gray-700 hover:bg-blue-100 ">

                    <Link to={`/project?projectid=${projectid}`} state={{...props}} >
                        <h5 className="mb-2  px-1 text font-bold  text-gray-800 dark:text-whte hover:underline hover:text-blue-600 truncate ">
                            {projName}
                        </h5>
                    </Link>
                    <div className="flex flex-inline items-center justify-between lg:my-2 my-2  mx-auto">
                        <div className="flex flex-row-2 gap-6 mr-auto items-center text-sm">
                            <div className='flex flex-inline mx-2 '>
                                <svg className={`${ erp > 0 ? "animate-wiggle" : "rotate-45 " } -mt-1 w-6 h-6 text-red-500 mx-2 duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                <pre>
                                    <Link to={`/project?projectid=${projectid}&type=รอส่งerp`} state={{...props}} 
                                        className="text-gray-800 dark:text-whte hover:underline hover:text-blue-600">
                                        {erp} ต้น
                                    </Link>
                                </pre>
                            </div >
                            <div className=' flex flex-inline mx-2'>
                                <svg className={`${ coin > 0 ? "animate-bounce" : "" }  w-6 h-6 text-amber-500 mx-2 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <pre>
                                    <Link to={`/project?projectid=${projectid}&type=เขียวแดง`} state={{...props}} 
                                    className="text-gray-800 dark:text-whte hover:underline hover:text-blue-600">
                                        {coin} ต้น
                                    </Link>
                                </pre>
                            </div>
                        </div>
                        { zone ? <Dropdownlist zone={zone} projectid={projectid} className="bg-gray-100 " /> : null}
                    </div>
                    <hr style={{ color: 'red' }}/>
                    <div className=" bg-gray-600 h-3 rounded-2xl my-1 flex  outline-offset-4 text-sm
                    flex-inline justify-start items-center mx-auto" style={{width: "100%"}} >
                        <div 
                            className="bg-green-400 duration-100 animate-pulse h-3  flex flex-start items-center justify-center 
                            text-md font-semibold text-white rounded-2xl" 
                            style={{width: "89%"}}>
                            <p>89%</p>
                        </div> 
                    </div>
                    <div className="px-2 block text-start text mx-auto w-auto ">
                        <p className="flex flex-inline text-sm">จำนวนเสาเข็มเจาะที่เสร็จ 75/100 <FingerPrintIcon className="h-6 w-6 pl-2 text-green"/></p>
                    </div>
                    {/* <Progressbar/> */}
                </div>
            </div>
        </>
    )
};

export default Maincard;