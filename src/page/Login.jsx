import React , {Fragment, useEffect, useState} from 'react'
import { Dialog , Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/20/solid'

import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../store/Auth';
import { useContext } from 'react';

const InitialForm = {
    username:'',
    password:'',
};


const LoginPage = () => {
    const navigate = useNavigate();
    const {user , setUser} = useContext(AuthContext);


    const [isOpen , setIsOpen ] = useState(false);
    const [formfields , setFormfields] = useState(InitialForm);
    const {username, password} = formfields;
    const resetFormFields = () => {
        setFormfields(InitialForm)
    };

    const onChangeHandler = (event) => {
        const {name , value} = event.target;

        setFormfields((formfields) => ({...formfields,[name]:value}));
        console.log(formfields);
    };

    const forgotpasswordToggleHandler = () => {
        setIsOpen(!isOpen);
    }

    const loginUser = async (credential) => {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        }).then(data => data.json())
    }

    
    
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
            })
            .then((value) => {
            localStorage.setItem('accessToken', response['accessToken']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            setUser(JSON.stringify(response['user']))
            resetFormFields();
            navigate('/')
            });
        } else {
            swal("Failed", response.message, "error");
            resetFormFields();
        }
    }
    
    const PylonUser = async (credential) => {
        return fetch('http://119.110.209.84:84/pylonexdev/api/v0/Login/onLogin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(credential)
        }).then(data => data.json())
    }
    
    const handlePylon = async event => {
        event.preventDefault();
        const response = await PylonUser({
            username,
            password
        });
        if (response.message === "Login Successful.") {
            swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
            })
            .then((value) => {
            localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            resetFormFields();
            navigate('/')
            });
        } else {
            swal("Failed", response.message, "error");
            resetFormFields();
        }
    }
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        console.log(formfields)
        if (token) {
            navigate('/')
        }
    })




    return (
        <>
            <div className="flex min-h-full items-start justify-center 
            py-10 px-4 sm:px-6 lg:px-8 mx-auto my-auto">
                <div className="w-full max-w-md space-y-4">
                <div className='relative'>
                    <img
                    className="mx-auto h-30 w-auto"
                    src="https://www.efinancethai.com/news/picture/2021/6/15/T/5864835.jpg"
                    alt="Logo"
                    />
                    <h2 className="abosolute -top-6 -mt-8 text-center text-3xl 
                        font-bold tracking-tight text-gray-700 ">
                    Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-zinc-600">
                    Or{' '}
                        <a href="https://www.pylon.co.th/en/contact-us" target="_blank"  className="font-medium text-sky-600 hover:text-sky-400">
                            contact our support
                        </a>
                    </p>
                </div>



                {/* form container */}
                <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm ">
                    <div className='mb-2'>
                        <label htmlFor="email-address" className="sr-only">
                            username
                        </label>
                        <input
                        value={username} 
                        onChange={onChangeHandler}
                        id="username" 
                        name="username"
                        type="text"
                        autoComplete="text"
                        required
                        className="relative block w-full appearance-none 
                        rounded-md border border-gray-300 px-3 py-2 text-gray-900
                         placeholder-gray-500 focus:z-10 focus:border-blue-500 
                         focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        value={password}
                        onChange={onChangeHandler}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none 
                        rounded-md border border-gray-300 px-3 py-2 text-gray-900
                         placeholder-gray-500 focus:z-10 focus:border-blue-500 
                         focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="Password"
                        />
                    </div>
                    </div>

                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 3xl:hidden">
                        Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <div onClick={() => {setIsOpen(true)}}
                        className="font-medium text-sky-600 hover:text-sky-500
                            hover:cursor-pointer ">
                        Forgot your password?
                        </div>
                    </div>
                    </div>
                
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent 
                            bg-blue-600 py-4 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-2
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-8 w-5 text-blue-500 group-hover:text-sky-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
                </div>
            </div>

            {/* Popup modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={setIsOpen}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300"
                        enterFrom="opacity-0" enterTo="opacity-100"
                        leave='ease-in-duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block' />
                    </Transition.Child>
                    
                    <div className='fixed top-0 lg:left-[35%] left-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child as={Fragment} enter="ease-out duration-300"
                            enterFrom="opacity-0" enterTo="opacity-100"
                            leave='ease-in-duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className="w-full min-w-[320px] max-w-xl transform overflow-hidden rounded-2xl 
                                bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                                        <div className='flex flex-between justify-between items-center'>    
                                            ลืมพาสเวิร์ดเหรอ?
                                            {/* <div className="mx-auto h-10 flex flex-end w-auto">
                                                <XMarkIcon />
                                            </div> */}
                                        </div>
                                    </Dialog.Title>
                                    <div className='my-6 p-4'>
                                        <p className='text-sm text-gray-500'>
                                            ติดต่อ: <a href="tel:191">191</a>
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <button type='button' 
                                            className='inline-flex justify-center rounded-md border-transparent bg-blue-100
                                                px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none 
                                                focus-visible:ring-2 focus-visible:ring-offset-2 '
                                            onClick={forgotpasswordToggleHandler}
                                        >
                                            Got it
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
};

export default LoginPage;