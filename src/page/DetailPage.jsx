import React , { useState ,useEffect , useRef , Fragment } from 'react'
import { useLocation  } from 'react-router-dom'
import useQuery from '../utils/use-query'
import { useDetectScroll} from '@smakss/react-scroll-direction'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import { Transition,Dialog } from '@headlessui/react'

import Step1 from '../components/details/step1'
import Step2 from '../components/details/step2'
import Step3 from '../components/details/step3'
import Step4 from '../components/details/step4'
import Step5 from '../components/details/step5'
import Step6 from '../components/details/step6'
import Step7 from '../components/details/step7'
import Step8 from '../components/details/step8'
import Step9 from '../components/details/step9'
import Step10 from '../components/details/step10'
import Step11 from '../components/details/step11'

import Subnavbar from '../components/Subnavbar';
import Statcard from '../components/Statcard';


const DetailPage = (props) => {
    // const { search } = useLocation();
    const location  = useLocation()
    console.log("state=>",location.state)
    // const hash = location.hash.substring(1);
    // console.log(hash)
    const query = useQuery();
   
    const pileId = query.get("pileid")
    console.log(pileId)
    
    // const startTime = useRef(0);
    // const endTime = useRef(0);

    // useEffect(() => {
    //    function handleScroll() {asdsadsad
    //     if (!startTime) 
    //    }
    //     window.addEventListener('scroll',() => {
    //          startTime.current = Date.now()
    //         console.log(`start listening to scroll: ${startTime.current}`)
    //     },{passive:true});
 
    //     return () => {
    //         window.removeEventListener('scroll',() => {
    //             endTime.current = Date.now()
    //             console.log('stop listening to scroll') 
    //         })
    //     }
    // }, [])

    // useEffect(()=> {
    //     const interval = endTime - startTime
    //     console.log(interval)
    //     console.log("endtime",endTime.current)
    // },[])


    const [scrollDir] = useDetectScroll({});
    const [duration , setDuration ] = useState(0);
    const [ startTime , setStartTime] = useState(null)

    const [isOpenModal , setIsOpenModal] = useState(false)

    const closeModal = () => {
        setIsOpenModal(false)
    }
    const openModal = () => {
        setIsOpenModal(true)
    }
    
    useEffect(() => {
        function handleScroll() {
            if (scrollDir === "down") {
                setDuration(duration + 1);
                setStartTime(0)
            }
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[duration,scrollDir])



    // const [scrollTime, setScrollTime] = useState(0);
    // const [scrollStart, setScrollStart] = useState(0);
    // const [isScrolling, setIsScrolling] = useState(false);
    // const coin = useRef(null)

    // useEffect(() => {
    //     async function handleScroll() {
    //       await setScrollTime(Date.now());
    //       if (!isScrolling) {
    //        await setScrollStart(Date.now() + 30000);
    //         setIsScrolling(true);
    //       }
    //     }

    //     window.addEventListener('scroll',handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll',handleScroll);
    //     };
    // },[isScrolling]);

    // useEffect(() => {
    //     if (scrollTime - scrollStart > 20000) {
    //         setIsScrolling(false);
    //         setTimeout(() => {coin.current = true},10000)
    //     }
    
    // },[scrollStart,scrollTime,isScrolling])
    

    useEffect(() => {
        const tagname = location.hash.substring(1);

        if (tagname) {
            const element = document.querySelector(`#${tagname}`);
            if (element) {
                element.scrollIntoView({block:'center'})
            }
        } else {
            window.scrollTo({ top: 0 });
            // scroll to the top of the browser window when changing route
        // the window object is a normal DOM object and is safe to use in React.
        }
    },[location])

   

   


    //---------------------------- handifull navigator to each steps ----------------------------//
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)   
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const handleClick2Ref1 = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth' ,block: 'end'});
    };
    const handleClick2Ref2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref4 = () => {
        ref4.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref5 = () => {
        ref5.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref6 = () => {
        ref6.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref7 = () => {
        ref7.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref8 = () => {
        ref8.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref9 = () => {
        ref9.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref10 = () => {
        ref10.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
    const handleClick2Ref11 = () => {
        ref11.current?.scrollIntoView({behavior: 'smooth' , block: 'center'});
    };
   //----------------------------------------------------------------------------------------------------------------//
   
  return (
    <>
        <div className='fixed w-screen z-30 transition-all duration-200'>
            <div className='relative lg:top-12 top-10'>
                <Subnavbar titleback={true} pileId={pileId} PName={location.state?.projName} />
                <div className="overflow-x-auto fixed min-h-6  left-0 px-1 py-1 bg-blue-100 border-b border-blue-300 w-screen z-20 ">
                    <ul className='flex px-1 flex-row mx-auto items-center justify-center '>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref1}><a className='text-blue-800'>1</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref2}><a className='text-blue-800' >2</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref3}><a className='text-blue-800'>3</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref4}><a className='text-blue-800'>4</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref5}><a className='text-blue-800'>5</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref6}><a className='text-blue-800'>6</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref7}><a className='text-blue-800'>7</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref8}><a className='text-blue-800'>8</a></li>
                        <li className='px-2 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-center' onClick={handleClick2Ref9}><a className='text-blue-800'>9</a></li>
                        <li className='lg:px-0 px-1 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-start lg:text-center' onClick={handleClick2Ref10}><a className='text-blue-800'>10</a></li>
                        <li className='lg:px-0 px-1 hover:cursor-pointer border border-blue-600 mx-1 w-6 z-30 text-start lg:text-center' onClick={handleClick2Ref11}><a className='text-blue-800'>11</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* check scrolling and time */}
        {/* {
            true ? 
        <div className='mx-auto border bg-slate-500 fixed  top-0 right-0  z-50  p-4'    >
            <p>Elapsed time: {duration} seconds , ScrollStart: {startTime} ,Delta: {duration-startTime} ,Direction:{scrollDir}</p>
        </div> 
        : null

        } */}
        {
            duration - startTime > 200 ? 
            <>
                <div className='fixed bottom-0 flex w-full justify-center z-50 bg-red-500 text-white py-1'    >
                    <div className='flex flex-1 justify-center items-center mx-auto ease-in transition duration-1000 hover:ease-out'>
                    <p>You can take coin now! </p>
                    <ArrowUpCircleIcon className='w-8 h-8 text-white hover:cursor-pointer' onClick={openModal}/>
                    </div>
                </div>
                 <Transition appear show={isOpenModal} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                รับเหรียญโครงการ <br/>{location.state.projName}
                            </Dialog.Title>
                            <div className="mt-2 py-2">
                                <p className="text-sm text-gray-500">
                                โปรดยืนยันให้แน่ใจในการเก็ยเหรียญ
                                หากมีปัญหาหรือสงสัยติดต่อ 101
                                </p>
                            </div>

                            <div className="mt-4 right-0 relative">
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                                >
                                ยืนยัน
                                </button>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>


            </>
            
            : null
        }
        {/* {
            duration - startTime > 100 && isOpenModal && <div className='fixed top-0 '></div>
        } */}
        <div className='relative lg:top-16 top-14'>
            <div className='mx-auto px-2 lg:my-0 my-2 flex flex-col w-full md:w-2/3 '>
                <div className='pt-[56px] lg:pt-[60px] '>
                {' '}
                {/* Search Container as SIDE BAR */}
                    <div className='pt-[30px] lg:pt-[10px]'>
                        <Statcard className=""/>
                        <h1 ref={ref1} id="step1" className='text-3xl font-bold'>1. เตรียมโครงเหล็ก</h1>
                        <Step1    />
                        <hr className='my-2 '/>
                        <h1 ref={ref2} id="step2" className='text-3xl font-bold'>2. ปักเคสซิ่ง</h1>
                        <Step2 />
                        <hr className='my-2 '/>
                        <h1 ref={ref3} id="step3" className='text-3xl font-bold'>3. วัดตำแหน่งก่อนเจาะ</h1>
                        <Step3 />
                        <hr className='my-2 '/>
                        <h1 ref={ref4} id="step4" className='text-3xl font-bold'>4. ทดสอบของเหลว</h1>
                        <Step4 />
                        <hr className='my-2 '/>
                        <h1 ref={ref5} id="step5" className='text-3xl font-bold'>5. เจาะเสาเข็ม</h1>
                        <Step5 />
                        <hr className='my-2 '/>
                        <h1 ref={ref6} id="step6" className='text-3xl font-bold'>6. เก็บตะกอน</h1>
                        <Step6 />
                        <hr className='my-2 '/>
                        <h1 ref={ref7} id="step7" className='text-3xl font-bold'>7. ลงโครงเหล็ก</h1>
                        <Step7 />
                        <hr className='my-2 '/>
                        <h1 ref={ref8} id="step8" className='text-3xl font-bold'>8. ลงท่อเทรมี่ / เม็ดโฟม</h1>
                        <Step8 />
                        <hr className='my-2 '/>
                        <h1 ref={ref9} id="step9" className='text-3xl font-bold'>9. ทดสอบคอนกรีต</h1>
                        <Step9 />
                        <hr className='my-2 '/>
                        <h1  ref={ref10} id="step10" className='text-3xl font-bold'>10. เทคอนกรีต</h1>
                        <Step10 />
                        <hr className='my-2 '/>
                        <h1  ref={ref11} id="step11" className='text-3xl font-bold'>11. ถอนเคสซิ่ง</h1>
                        <Step11    /> 
                    </div>
                </div >
            </div>

        </div>
    </>
  )
}

export default DetailPage;