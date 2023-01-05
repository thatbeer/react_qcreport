import { Link } from "react-router-dom";
import Dropdownlist from "./Dropdownlist";
import Statcard from "./Statcard";


const Maincard = (props) => {
    
    const {projectid} = props
    return (
        <>
            <div className="block px-4 py-1 my-1 border  rounded-lg w-[630px] mx-auto  h-[160px] lg:h-auto
                            shadow-none hover:shadow-sm bg-blue-100 hover:bg-gray-100">
                <Link to={`/project?pileid=${projectid}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-whte truncate ">
                    Click here to go second page
                    </h5>
                </Link>
                <p className="text-gray-700 dark:text-gray-400 truncate overflow-auto my-2">
                    

                </p>
                
                <div className="flex flex-inline items-center justify-between lg:my-2 mt-8 mx-auto">
                    <div className="flex flex-row-2 gap-6 mr-auto items-center">
                        <p className='flex flex-inline mx-2 '>1 {"  "}
                            <svg class="animate-wiggle w-6 h-6 text-red-500 mx-2 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </p >
                        <p className=' flex flex-inline mx-2'> 
                            2
                            <svg class="animate-bounce w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </p>
                    </div>
                    <Dropdownlist className="  bg-gray-100 " />
                </div>
                <Statcard/>
            </div>
        </>
    )
};

export default Maincard;