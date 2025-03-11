import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Navbar = () => {
  const [loggedinUser, setLoggedinUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setLoggedinUser(email.split("@")[0]);
    }
  })

 const handleLogout = () => {
  localStorage.removeItem("userEmail")
 }
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.0, delay: 0 / 5 }}
    >
      <div className='navbar flex justify-evenly items-center p-5 bg-black text-white'>
        <div className="logo">
          <Link to='/'><h1 className='font-bold'>CRITIC_LAUNCH_115</h1></Link>
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
            {/* <Link >
            <li><a href="">Login</a></li>
          </Link> */}
            {/* <Link to="/login">
              <li><a href="">Get Started</a></li>
            </Link> */}
            {loggedinUser ? (
              <>
                <li><a>{loggedinUser}</a></li>
                <li onClick={handleLogout}><a href="">Logout</a></li>
              </>
            ) : (
              <Link to="/login">
                <li><a href="">Get Started</a></li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
