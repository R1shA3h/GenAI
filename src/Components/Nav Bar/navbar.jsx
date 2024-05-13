// import React,{useState} from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import './navbar.css'
import logo from '../../assests/logo.svg'
import { Link } from 'react-scroll';
const Navbar = () => {
  // const[menu,setMenu] = useState("home");
  // const menuRef = useRef();
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl pt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <img src={logo} className='h-7 w-20' alt="logo" />
              <span className="sr-only">Home</span>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">

                <li>
                  <Link to="features" smooth duration={1000} className="cursor-pointer text-black transition hover:text-gray-500/75" >Features </Link>
                </li>

                <li>
                <Link to="products" smooth duration={1000} className="cursor-pointer text-black transition hover:text-gray-500/75" >Product </Link>
                </li>

                <li>
                <Link to="pricing" smooth duration={1000} className="cursor-pointer text-black transition hover:text-gray-500/75" >Testimonial </Link>
                </li>

                <li>
                <Link to="faq" smooth duration={1000} className="cursor-pointer text-black transition hover:text-gray-500/75" >FAQ </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center  gap-2">
            <div className="flex sm:gap-2">
              <Link to ="subscribe" smooth duration={1000}
                className="flex cursor-pointer items-center gap-1 rounded-md bg-orange-600 px-6 py-2.5 text-sm font-medium text-white shadow"
                
              >
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill='#FFFFFF'/></svg>
                        
              </Link>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Navbar