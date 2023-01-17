import React , {Fragment} from 'react'
import { Transition,Dialog } from '@headlessui/react'
import { ArrowUpCircleIcon  } from '@heroicons/react/24/outline'


const getCoinModal = (props) => {
    const {isOpenModal , closeModal } = props
  return (
    <>
        <div className='fixed bottom-0 flex w-full justify-center z-50 bg-rose-600 text-white py-1'    >
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
                        รับเหรียญโครงการ <br/>{props.location.state.projName}
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
  )
}

export default getCoinModal