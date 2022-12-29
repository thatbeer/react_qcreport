import React , {useMemo} from 'react'
import { useLocation } from 'react-router-dom';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import TableContent from '../components/tablecotent';
import Progressbar from '../components/progressbar';

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
        <div className="w-full flex flex-col flex-grow h-screen ">
            <div className='fixed top-[55px] w-full items-center mx-auto bg-green-200 h-[50px] z-30 py-1  '>
                <div className='flex flex-col lg:flex-row mx-auto items-center py-2 bg-red-200'>
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
            <div className='flex flex-1 mx-auto mt-4 lg:mt-1'>
                <main role="main" className="lg:w-full w-screen h-full flex-grow px-2 py-1 ">
                    <div className='flex flex-col lg:flex-row justify-between pt-[64px] mx-auto'>
                        <div className='w-full '>
                            <Progressbar id={id}/>
                        </div>
                    </div>
                    <div className='w-full '> 
                        <TableContent id={id}/>
                    </div>
                </main>
            </div>
        </div>
    </>
  )
}

export default ProjectPage