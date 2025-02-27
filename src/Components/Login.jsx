import React, { useState } from 'react'
import CustomLayout from './Layout/CustomLayout'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [loggedIn, isLoggedIn] = useState(false);

    const checkLoginStatus = () => {
        isLoggedIn(prevState => !prevState);
    }

    return (
        <CustomLayout>
            <section className='flex justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                    animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                    exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                    transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
                >
                    <div className="icons absolute left-[12%] top-[10%] text-[4rem]">
                        <FontAwesomeIcon icon={faMicrochip} className='text-white' />
                    </div>
                    <div className="icons absolute right-[12%] bottom-[5%] text-[4rem]">
                        <FontAwesomeIcon icon={faMicrochip} className='text-[#84bdae]' />
                    </div>
                </motion.div>
                <div className="flex gap-[10%] justify-around items-center mainFrame w-[1100px] h-[530px] bg-white/5 backdrop-blur shadow-designBox3 my-10 rounded-[2%] overflow-hidden z-[100]">
                    <div className="leftSide text-white h-[517px] p-10 flex justify-between items-center z-[9999]">
                        {loggedIn == false && (
                            <motion.div
                                initial={{ x: "500%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                <div className={`register relative h-[500px] flex items-center w-[220px] ${loggedIn ? "hidden" : "block"}`}>
                                    <form action="" className='absolute left-10 items-center flex flex-col gap-5'>
                                        <div className="mainTitle">
                                            <h1 className='text-2xl font-bold'>Registration</h1>
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Email : </span>
                                            <input type="text" name="email" id="email" className='text-black p-2' />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Password : </span>
                                            <input type="password" name="password" id="password" className='text-black p-2' />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Confirm Password : </span>
                                            <input type="password" name="confirmpassword" id="confirmpassword" className='text-black p-2' />
                                        </div>
                                        <div className="loginNav flex gap-2">
                                            <span>Are you Registered?</span>
                                            <span onClick={checkLoginStatus} className='cursor-pointer'>Login</span>
                                        </div>
                                        <div>
                                            <button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-1 rounded-lg text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                        {loggedIn && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "280%" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                <div className={`login p-5 relative h-[500px] flex items-center w-[260px] absolute right-20 ${loggedIn ? "block" : "hidden"}`}>
                                    <form action="" className='absolute left-10 items-center flex flex-col gap-5'>
                                        <div className="mainTitle">
                                            <h1 className='text-2xl font-bold'>Login</h1>
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Email : </span>
                                            <input type="text" name="email" id="email" className='text-black p-2' />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Password : </span>
                                            <input type="password" name="password" id="password" className='text-black p-2' />
                                        </div>
                                        <div className="loginNav flex gap-2">
                                            <span>Are you New User?</span>
                                            <span onClick={checkLoginStatus} className='cursor-pointer'>Register</span>
                                        </div>
                                        <div>
                                            <button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-1 rounded-lg text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="rightSide relative">
                        {loggedIn == true && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                                    animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                                    exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                                    transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
                                >
                                    <div className={`traingle absolute  bottom-[-50%]  ${loggedIn ? "-rotate-90 right-[-37%]" : "rotate-90 right-[40%]"}`}>
                                        <svg width="1000" height="1000" >
                                            <polygon points="500,0 1000,1000 0,1000" fill="#06070C"
                                                style={{ filter: "drop-shadow(0px 0px 25px #1d6654" }} />
                                        </svg>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: "150%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                >
                                    <div className="image h-[500px] w-[500px] relative ">
                                        <img className={`h-[320px] w-[300px] absolute top-[30%]  ${loggedIn ? "scale-x-[-1] left-[-110%]" : "left-[50%]"}`} src='/Clear AI Login Remove.png'></img>
                                    </div>
                                </motion.div>
                            </>
                        )}
                        {loggedIn == false && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                                    animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                                    exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                                    transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
                                >
                                    <div className={`traingle absolute  bottom-[-50%]  ${loggedIn ? "-rotate-90 right-[-37%]" : "rotate-90 right-[40%]"}`}>
                                        <svg width="1000" height="1000" >
                                            <polygon points="500,0 1000,1000 0,1000" fill="#06070C"
                                                style={{ filter: "drop-shadow(0px 0px 25px #1d6654" }} />
                                        </svg>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: "-150%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                >
                                    <div className="image h-[500px] w-[500px] relative ">
                                        <img className={`h-[320px] w-[300px] absolute top-[30%]  ${loggedIn ? "scale-x-[-1] left-[-110%]" : "left-[50%]"}`} src='/Clear AI Login Remove.png'></img>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </CustomLayout>
    )
}

export default Login
