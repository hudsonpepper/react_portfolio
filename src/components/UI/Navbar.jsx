// Tailwind UI NavBar


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import headshot from "/headshot.jpg"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function isCurrentPageStyling(relativeLink) {
  if (window.location.href.split(`${window.origin}`)[1] === relativeLink) {
    return "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-slate-200";
  }
  else {
    return "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300";
  }
}

function isCurrentPageStylingMobile(relativeLink) {  
  if (window.location.href.split(`${window.origin}`)[1] === relativeLink) {
    return "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700";
  }
  else {
    return "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";
  }
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-slate-800 shadow z-50">
      {({ open }) => (
        <>
          <div className="mr-auto max-w-7xl pr-2 sm:pr-6 lg:pr-8">
            <div className="relative flex h-16 justify-between">
              <div className='flex items-center p-2 m-2 bg-slate-600 rounded'>
                <div><img  className="object-scale-down h-8 rounded-full" src={headshot} alt="" /></div>
                <h1 className="text-lg text-slate-200 p-2 font-bold">Hudson Pepper</h1>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-500 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className={isCurrentPageStyling('/')}
                  >
                    Portfolio
                  </a>
                  <a
                    href="/about"
                    className={isCurrentPageStyling('/about')}
                  >
                    About Me
                  </a>
                  <a
                    href="/contact"
                    className={isCurrentPageStyling('/contact')}
                  >
                    Contact Me
                  </a>
                  <a
                    href="/resume"
                    className={isCurrentPageStyling("/resume")}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={isCurrentPageStylingMobile('/')}
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={isCurrentPageStylingMobile('/about')}
              >
                About Me
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className={isCurrentPageStylingMobile('/contact')}
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/resume"
                className={isCurrentPageStylingMobile('/resume')}
              >
                Resume
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

