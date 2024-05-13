import React from 'react'
import { Link } from 'react-scroll'
import Check from "../../assests/check-circle.png"
const pricing = () => {
  return (
    <div id='pricing' className="pricing"><h1 className='my-20 text-5xl font-bold justify-center wx-[30%] text-center'>Start making <span className='text-orange-600'>smarter</span> decisions,<br/>Choose a plan</h1>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
            <div className="rounded-2xl border border-gray-200 p-6 order-first shadow-sm sm:px-8 lg:p-12">
                <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">
                    Explorer
                    <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $4,99 </strong>

                    <span className="text-xl font-medium text-gray-400">/mo</span>
                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>
                    <span className="text-gray-700"> Market Trend Analysis</span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Limited Query Mapping </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Standard Dashboards </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Email Notifications </span>
                    </li>
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Entry-Level Support </span>
                    </li>
                </ul>

                <Link 
                    to="subscribe" smooth duration={1000}
                    className="mt-8 block rounded-lg border bg-white px-12 py-3 text-center text-sm font-medium text-black hover:ring-1 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring active:text-orange-500"
                >
                    Get Now →
                </Link>
                </div>
                <div
                className="rounded-2xl border p-6 shadow-sm ring-1 sm:order-middle sm:px-8 lg:p-12"
                >
                <div className="text-center">
                    <h2 className="text-xl font-medium mt-4 mb-4 text-orange-600">
                    Innovator<span className='text-orange-600 text-[10px] py-1.5 px-2 ml-2 bg-orange-100 rounded-lg border 2'>● BEST VALUE</span>
                    <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $19,99 </strong>

                    <span className="text-xl font-medium text-gray-400">/mo</span>
                    </p>
                </div>

                <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>
                    <span className="text-gray-700"> Market Trend Analysis</span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Limited Query Mapping </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Standard Dashboards </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Email Notifications </span>
                    </li>
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Entry-Level Support </span>
                    </li>
                </ul>

                <Link to="subscribe" smooth duration={1000}
                    className="mt-8 block rounded-lg border border-orange-600  px-12 py-3 text-center text-sm font-medium text-white bg-orange-600 hover:bg-orange-800 hover:ring-1 hover:ring-orange-900 focus:outline-none focus:ring active:text-orange-500"
                >
                    Get Now →
                </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 order-last shadow-sm sm:px-8 lg:p-12">
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                    Visionary
                    <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $49,99 </strong>
                    <span className="text-xl font-medium text-gray-400">/mo</span>
                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                <li className="flex w-auto items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>
                    <span className="text-gray-700"> Everything in Innovator,plus</span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Competitor Benchmarking</span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Holistic Market Visualization</span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700"> Adaptive Strategy Planner</span>
                    </li>
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700">24/7 Priority Support</span>
                    </li>
                    <li className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"fill="#FF5F1F"/></svg>

                    <span className="text-gray-700">Custom Integrations</span>
                    </li>
                </ul>

                <Link 
                    to="subscribe" smooth duration={1000}
                    className="mt-8 block rounded-lg border bg-white px-12 py-3 text-center text-sm font-medium text-black hover:ring-1 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring active:text-orange-500"
                >
                    Get Now →
                </Link>
                </div>
            </div>
        </div>
        <div className="flex mx-[20%] justify-between items-center bg-white px-4 py-2">
      <div className="flex items-center">
        <img src={Check} alt="Free trials" className="h-6 mr-2"/>
        <span className="text-orange-600 font-semibold">Free trials</span>
      </div>
      <div className="flex items-center">
        <img src={Check} alt="Cancel anytime" className="h-6 mr-2"/>
        <span className="text-orange-600 font-semibold">Cancel anytime</span>
      </div>
      <div className="flex items-center">
        <img src={Check} alt="Stay protected" className="h-6 mr-2"/>
        <span className="text-orange-600 font-semibold">Support included</span>
      </div>
    </div>
    </div>
  )
}

export default pricing