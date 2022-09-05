import React, {useState} from 'react';
import Button from './Button';
import Price from './Price';
import './NavBar.scss'

export default function Navbar() {
  let Links = [
    {
      name:"About Us",
      link:'/about'
    },
    {
      name:"Get In Touch",
      link:'/contact'
    }
  ]
  let [open, setOpen] = useState(false)


  return (
    <div className='z-10 shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px10 px-7'>
       <div className='font-bold texxt 2xl cursor-pointer flex items-center  text-gray-800'>
         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="wifi-outline"></ion-icon>
        </span>
       <a href='/'> ProductFilter</a>
        </div> 
        <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close': 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {
            Links.map((link)=>{
             return (
             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a className='text-gray-800 hover:text-gray-400 duration-500' href={link.link}>{link.name}</a>
              </li>)
            })
          }
          <Button >
            Pricing
          </Button>
        </ul>
      </div>

    </div>
  )
}
