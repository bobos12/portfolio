import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {menu,close} from '../assets'
import { nav } from 'framer-motion/client'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive('');window.scrollTo(0,0)}}>
          <div className="w-auto h-9 px-3 rounded-lg bg-[#915EFF] flex items-center justify-center shadow-md transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center font-mono">
              <span className="text-white text-xl">&lt;</span>
              <span className="text-white text-xl font-bold">A</span>
              <span className="text-white text-xl">&gt;</span>
            </div>
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex flex-row'>
            AHMED &nbsp;
            <span className='sm:block hidden'>| Web Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='menu' className='w-[18px] h-[18px] object-contain' onClick={()=>setToggle(!toggle)}/>
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {navLinks.map((link)=>(
                <li key={link.id} className={`${active===link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={()=>{setActive(link.title);setToggle(!toggle)}}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar