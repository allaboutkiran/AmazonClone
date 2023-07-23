import React, {useState, useRef, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



export const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar, setSideBar]=useState(false)
    useEffect(()=> {
        document.body.addEventListener("click", (e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false)
            }
        })
    },[ref,sidebar])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        {/*List Items start here */}
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li onClick={()=>setSideBar(true)} className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 gap-1 '><MenuIcon/>All</li>
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Amazon MiniTV</li>
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Sell</li>
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Best Sellers</li>
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Today's Deals</li>
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Mobiles</li> 
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>New Releases</li> 
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Customer Services</li> 
            <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex'>Prime</li>
        </ul>
        {/*List Items end here */}
        {/*sideNav start here */}
        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                    <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}}className=' w-[80%] md:w-[350px] h-full bg-white border border-black overflow-y-scroll'>
                        <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4 sticky top-0 z-50'>
                            <AccountCircleIcon/>
                            
                            <h3 className='font-titleFont font-bold text-lg tracking-wide '>Hello, Sign In</h3>
                            </div>
                            <div className='py-3 border-b-[1px] border-b-gray-300 '>
                                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Digital Content & Devices</h3>
                                <ul className='text-sm'>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Music{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Kindle E-Readers & Books{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Appstore{""} <span><KeyboardArrowRightIcon/></span></li>
                                </ul>
                            </div>
                            <div className='py-3 border-b-[1px] border-b-gray-300'>
                                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Shop By Department</h3>
                                <ul className='text-sm'>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Electronics{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Computers{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Smart Home{""} <span><KeyboardArrowRightIcon/></span></li>
                                    
                                </ul>
                            </div>
                            <div className='py-3 border-b-[1px] border-b-gray-300'>
                                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Programs & Features</h3>
                                <ul className='text-sm'>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Gift Cards{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon live{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>International Shopping{""} <span><KeyboardArrowRightIcon/></span></li>
                                </ul>
                            </div>
                            <div className='py-3 border-b-[1px] border-b-gray-300'>
                                <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Help & Settings</h3>
                                <ul className='text-sm'>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Your Account{""} <span><KeyboardArrowRightIcon/></span></li>
                                    <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Customer Service{""} <span><KeyboardArrowRightIcon/></span></li>
                                </ul>
                            </div>
                            <span onClick={()=> setSideBar(false)} className='cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-white flex items-center justify-center  duration-300'><CloseIcon/></span>
                            </motion.div>
                    
                    
                    </div>

                    </div>
            )
        }
        {/*sideNav end here */}
    </div>
  )
}
