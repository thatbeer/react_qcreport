import React from 'react'
import { FolderArrowDownIcon , ChevronUpDownIcon , Bars3Icon} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'


const Subnavbar = (props) => {
  const navigate = useNavigate();

  const onClickTitle = () => {navigate(-1)};
  const {titleback , projectname} = props

  return (
    <>
        <div className='relatvie mx-auto  min-h-[40px] bg-blue-100 border border-blue-300'>
            <div className='flex px-6 mx-auto py-1 justify-center items-center '>
                <div className='flex flex-col mx-auto items-center w-3/4
                justify-center sm:justify-start sm:items-stretch text-xl font-bold mt-2 lg:m-0 '>
                  <p className={`truncate w-full text-center lg:text-start ${titleback ? "hover:text-blue-700 hover:cursor-pointer" : ""}  z-40 `}
                   onClick={titleback ? onClickTitle : null}>โครงการ Aspire Sukhumvit - Rama 4</p>
                  <p className='truncate w-full text-center lg:hidden'>PA48 </p>
                </div>


              <div className="absolute inset-y-0 left-0 flex items-center pr-2 
                   sm:ml-6 sm:pr-0 lg:mb-2 mb-0"
              >
                  <>
                <div className=' w-screen pt-4 absolute'>
                  <div className="dropdown dropdown-bottom ">
                    <label tabIndex={0} className="hover:cursor-pointer focus:border rounded-full">
                      <Bars3Icon className=" h-10 w-10 text-blue-600 z-40"/></label>
                    <ul tabIndex={0} className="absolute dropdown-content menu divider-y
                        p-2 bg-blue-100 w-52 border border-gray-600">
                      <li className='border-b border-gray-700'><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </div>
                  </>
              </div> 
              <div className="absolute inset-y-0 right-0  items-center pr-2 
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:flex"
              >
                <div className='mx-2'>
                  <div>
                    Pile:{ " {NO}"}
                  </div>
                </div>
                <FolderArrowDownIcon className='hidden lg:flex h-10 w-10 mx-2 pr-2 text-red-500' />
              </div> 
            </div>
        </div>
    </>
  )
}

export default Subnavbar