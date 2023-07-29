import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

function Header() {

    const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#301934] p-4 text-white'>
    <div className='max-w-[1240px] py-[15px] text-center flex justify-between mx-auto'>
    <div className= 'text-3xl font-bold'>
        FindX
    </div>
    {
        toggle ?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='cursor-pointer text-3xl md:hidden block'/>
       :
       <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='cursor-pointer text-3xl md:hidden block'/>

        
    }
    <ul className='hidden md:flex gap-10'>
        <li>
            <a href="#">
                Home
            </a>
        </li>
        <li>
            <a href="#">
                Company
            </a>
        </li>
        <li>
            <a href="#">
                Service
            </a>
        </li>
        <li>
            <a href="#">
                Contact
            </a>
        </li>
    </ul>
    {/* responsive menu */}
    <ul className={`duration-300 md:hidden  w-full h-screen fixed bg-black top-[92px] ${toggle? 'left-[0]': 'left-[-100%]'} `}>
        <li className='p-5'>
           Home
        </li>
        <li className='p-5'>
           Service
        </li>
        <li className='p-5'>
           About Us
        </li>
        <li className='p-5'>
           Contact
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Header