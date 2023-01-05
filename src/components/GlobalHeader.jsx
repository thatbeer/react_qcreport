import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ArrowUpCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link, Outlet } from 'react-router-dom';

const navigation = [
    { name: 'Sub', to: '/project', current: false },
    { name: 'Detail', to: '/project/id', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const LogoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  }

  
const GlobalHeader = () =>  {
    return (
        <>
        <header className='fixed top-0 z-40 w-full '>
        <Disclosure as="nav" className="bg-blue-600">
        {({ open }) => (
            <>
            <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-14 items-center justify-between">
                    {/* Mobile menu button*/}
                    {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <ArrowUpCircleIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div> */}
                <div className="flex flex-1 items-center   sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    {/* <img
                        className="block h-8 w-auto "
                        src="https://www.pylon.co.th/en/contact-us"
                        alt="Logo"
                    /> */}
                    <button className=' flex top-2 w-auto text-3xl text-white text-bold'>
                        <Link to="/">
                            PYLON
                        </Link>
                    </button>
                    {/* <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Logo"
                    /> */}
                    </div>
                    {/* <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navigation?.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </div> */}
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 
                    sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Notification button for later add ons */} 
                    <button
                    type="button"
                    className="flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                    <span className="sr-only">View notifications</span>
                    <div className='flex flex-row'>
                        <CurrencyDollarIcon className="h-6 w-6 text-yellow-400 " aria-hidden="true" /> 1000

                    </div>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1
                        focus:ring-gray-800 focus:ring-offset-1 focus:ring-offset-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right 
                        rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <p
                                
                                className={classNames(active ? 'bg-blue-100 shadow-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                {"{Name here}"}
                            </p>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <Link
                                to="/side"
                                className={classNames(active ? 'bg-blue-200 shadow-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Your Profile
                            </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <Link
                                to="/side"
                                className={classNames(active ? 'bg-blue-100 shadow-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Settings
                            </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                onClick={LogoutHandler}
                                className={classNames(active ? 'bg-blue-100 shadow-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Logout
                            </button>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
                </div>
            </div>

            {/* <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                       
                            {item.name}
                       
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel> */}
            </>
        )}
        </Disclosure>
        </header>
        <Outlet />
        </>
    )
}
  
export default GlobalHeader;