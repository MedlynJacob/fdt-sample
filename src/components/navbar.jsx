import React from "react";
import Logo1 from "../assets/FDT website watermark white.png"
import { Navigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const NavBar = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-0">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        stroke={2}
        className="p-2 font-bold"
      >
        <a className="flex items-center hover-underline-animation" onClick={() => Navigate('/', { replace: true })}>
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-bold"
      >
        <a className="flex items-center hover-underline-animation" onClick={() => Navigate('/solutions', { replace: true })}>
          Solutions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-bold"
      >
        <a className="flex items-center hover-underline-animation" onClick={() => Navigate('/dashboard', { replace: true })}>
          Dashboard
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-bold"
      >
        <a className="flex items-center hover-underline-animation" onClick={() => Navigate('/about', { replace: true })}>
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-bold"
      >
        <a className="flex items-center hover-underline-animation" onClick={() => Navigate('/contact', { replace: true })}>
          Contact Us
        </a>
      </Typography>
    </ul>
  );
  
 
  return (
    <>
      <Navbar className=" fixed top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-3 backdrop-filter backdrop-blur-lg bg-opacity-80 border-b bg-gray-500">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5">
            <img alt="FDT" className="h-8 pr-1 mx-auto" src={Logo1}></img>
            
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{NavBar}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
        
          {NavBar}
        </MobileNav>
      </Navbar>
      
    </>
    
  );

}
