import { Link } from "react-router-dom";
import Dropdownlist from "./Dropdownlist";
import Progressbar from "./progressbar";
import Statcard from "./Statcard";
import { FingerPrintIcon } from "@heroicons/react/24/outline";

const Maincard = (props) => {
    
    const {projectid} = props
    return (
        <>
            <div className="block px-4 py-3 my-1 border  rounded-lg w-screen lg:w-[630px] mx-auto  h-auto lg:h-auto
                            shadow-none hover:shadow-sm bg-blue-200 hover:bg-gray-100 transition-all duration-150">
                <Link to={`/project?pileid=${projectid}`}>
                    <h5 className="mb-2  px-1 text-lg font-bold  text-gray-800 dark:text-whte truncate ">
                        65-09 ทางพิเศษสายพระราม3
                    </h5>
                </Link>
                
                
                <div className="flex flex-inline items-center justify-between lg:my-2 my-2  mx-auto">
                    <div className="flex flex-row-2 gap-6 mr-auto items-center">
                        <p className='flex flex-inline mx-2 '>
                            <svg class="animate-wiggle w-6 h-6 text-red-500 mx-2 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            <pre>
                                    2
                            </pre>
                        </p >
                        <p className=' flex flex-inline mx-2'>
                            <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <pre>

                             2
                            </pre>
                        </p>
                    </div>
                    {/* <Dropdownlist className="  bg-gray-100 " /> */}
                </div>
                <hr style={{ color: 'red' }}/>
                <div className=" bg-gray-200 h-6 rounded-2xl my-2 flex border-t outline-offset-4	
                flex-inline justify-start items-center mx-auto" style={{width: "100%"}} >
                    <div 
                        className="bg-green-400 h-6  flex flex-start items-center justify-center 
                        text-md font-semibold text-white rounded-2xl" 
                        style={{width: "75%"}}>
                        75%
                    </div> 
                </div>
                <div className="px-2 py-1 block text-start text-sm mx-auto w-auto bg--200 border border-gray-200">
                    <p className="flex flex-inline">จำนวนเสาเข็มเจาะที่เสร็จ 75/100 <FingerPrintIcon className="h-6 w-6 pl-2 text-green"/></p>
                </div>
                {/* <Progressbar/> */}
            </div>
        </>
    )
};

export default Maincard;