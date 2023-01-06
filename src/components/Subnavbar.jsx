import React from 'react'
import { FolderArrowDownIcon , ChevronUpDownIcon , Bars3Icon} from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'


const projectX = [
  {projectId: "DA21" ,name: "63-09 ทางพิเศษพระราม 3 สัญญาที่/ (MLp 06 to MLP 07)"},
  {projectId: "pd11" ,name: "64-16 skyrise Avenue Sukhimvit 642"},
  {projectId: "DA61" ,name: "65-16 North Pole"},
  {projectId: "Pw61" ,name: "65-12 Xim Rama3-Suksawat"},
  {projectId: "op12" ,name: "64-16 Skyrise Avenue Sukhumvit 64 Phase 2"},
  {projectId: "DE15" ,name: "65-01 ทางพิเศษสายพระราม3 สัญญาที่ 1"},
  {projectId: "EW12" ,name: "65-05 Aspire Sukhumvit-Rama4"},
  {projectId: "ER10" ,name: "65-09 ทางพิเศษสายพระราม 3 - ดาวคะนอง - วงแหวนรอบนอกกรุงเทพมหานครด้านตะวันตก สัญญาที่ 2"},
  {projectId: "APB01" ,name: "65-11 Grande Centre Point Ratchadamri 2"},
  {projectId: "KF12" ,name: "65-13 King's College International School Bangkok (Phase 3), B7 Building"},
]

const Subnavbar = (props) => {
  const navigate = useNavigate();
 

  const onClickTitle = () => {navigate(-1)};
  const {titleback , pileId ,isProjectPage ,PName } = props

  return (
    <>
        <div className='relatvie mx-auto  min-h-[40px] bg-blue-100 '>
            <div className='flex px-6 mx-auto py-1 justify-center items-center '>
                <div className={`flex flex-col mx-auto items-center ${ isProjectPage ? "w-full" : "w-3/4"}
                justify-center sm:justify-start sm:items-stretch text-xl font-bold mt-2 lg:m-0 sm:mt-0`}>
                  <p className={`truncate w-full text-center lg:text-start ${titleback ? "hover:text-blue-700 hover:cursor-pointer" : ""}  z-40 `}
                   onClick={titleback ? onClickTitle : null}>{PName}</p>
                  <p className='truncate w-full text-center lg:hidden'>
                    { pileId ? (
                    <div className='flex items-center justify-center' >
                      {pileId}
                      <FolderArrowDownIcon className='md:hidden z-30 lg:relative h-8 w-8  text-red-500 
                    hover:cursor-pointer ' />
                      <div>
                    </div>
                    </div>) : null
                    }
                  </p>
                </div>


              <div className="absolute inset-y-0 left-0 flex items-center pr-2 
                   sm:ml-6 sm:pr-0 lg:mb-2 mb-0"
              >
                  <>
                  { isProjectPage ? null : 
                    <div className=' w-screen pt-3 absolute'>
                      <div className="dropdown dropdown-bottom ">
                        <label tabIndex={1} className="hover:cursor-pointer focus:border rounded-full">
                          <Bars3Icon className=" h-10 w-10 text-blue-600 z-40"/></label>
                        <ul tabIndex={0} className="absolute dropdown-content menu divider-y
                            p-2 bg-blue-100 w-auto border border-gray-600">
                            { projectX.map((project) => (
                              <Link to={`/project?projectid=${project.projectId}`} 
                              className='p-1 border-b border-gray-700 truncate text-sm'>
                                {project.name}
                              </Link>
                            ))}
                          {/* <li className='border-b border-gray-700'><a>Item 1</a></li>
                          <li><a>Item 2</a></li> */}
                        </ul>
                      </div>
                    </div>
                  }
                  </>
              </div> 
              <div className="absolute inset-y-0 right-0 items-center pr-2 
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:flex z-30" 
              >
                { pileId ? (
                <div className='flex flex-1 items-center'>
                  <h2 className='font-bold'>
                    {pileId}
                  </h2>
                  <div>
                  <FolderArrowDownIcon className='flex z-30 lg:relative h-12 w-12 mx-2 pr-2 text-red-500 
                  hover:cursor-pointer ' />

                  </div>
                </div>
                )
                
                :
                 null
                }
              </div> 
            </div>
        </div>
    </>
  )
}

export default Subnavbar