import React from 'react'
import {Link} from 'react-scroll';
import './first.css'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import heroimg from '../../assests/heroimg.jpg'
const first = () => {
  return (
    <div id='home' className="w-screen h-auto bg-white py-16 sm:py-20">
      <div className="flex flex-col col-span-2 lg:px-8">
        <div className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="justify-start w-[550px] text-justify my-[50px] lg:max-w-lg">
              <p className="mt-2  font-bold tracking-tight text-gray-900 sm:text-4xl"><span className='text-6xl  text-orange-600'>Transform Ideas</span><br/><span className='text-6xl '> into apps with AI</span></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled</p>
              <Link to="subscribe" smooth duration={1000}
                className="flex cursor-pointer items-center w-40 gap-3 rounded-md bg-orange-600 mt-6 px-6 py-2.5 text-sm font-medium text-white shadow scroll-smooth"
                
              >
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill='#FFFFFF'/></svg>
                        
              </Link>
            </div>
          </div>
          <img src={heroimg} alt="Product screenshot" className="w-[48rem] max-w-none overflow-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0" width="2400" height="400"/>
        </div>
      </div>
    </div>

    );
};


export default first