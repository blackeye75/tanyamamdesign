import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white' >
      <div className='w-full h-18 shadow-lg  px-10 flex items-center justify-between' >
        <div className='flex items-center gap-2' >
          <img className='w-[8vw]' src="https://edukyu.com/assets/cxp-assets/logo/logo.png" alt="" />
          <h1 className='text-lg font-semibold font-sans border-l-[1px] pl-2' >#kyuki
            <span className='text-blue-500' >badhna</span>
            jarurihai</h1>
        </div>
        <div className='menu ' >
          {["Succeed", "About", "Enterpise Solutions", "Resources", "Pricing"].map((item) =>
            <li className='list-none inline-block mx-4 cursor-pointer' key={item} >{item}</li>
          )}
        </div>
        <div>Register Now!</div>
      </div>
    </div>
  )
}

export default NavBar;