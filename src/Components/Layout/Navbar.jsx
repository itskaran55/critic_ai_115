import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-evenly items-center p-5 bg-black text-white'>
      <div className="logo">
        <a href=''><h1 className='font-bold'>CRITIC_LAUNCH_115</h1></a>
      </div>
      <div className="navLinks shadow-navBox p-2 rounded-r-xl rounded-l-xl">
        <ul className='flex gap-4'>
            <li><a href="">Overview</a></li>
            <li><a href="">Technology</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Docs</a></li>
        </ul>
      </div>
      <div className="loginRegisterbtn">
            <ul className='flex gap-4'>
                <li><a href="">Login</a></li>
                <li><a href="">Get Started</a></li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
