import React, { useState } from 'react'
import CustomLayout from './Layout/CustomLayout'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const clientId = "565551626947-mjl8gdc1nsragdlegaqgnbpcn3nvi5vs.apps.googleusercontent.com"
    const history = useNavigate();
    const [loggedIn, isLoggedIn] = useState(false);
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const checkLoginStatus = () => {
        isLoggedIn(prevState => !prevState);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const registration = async (e) => {
        e.preventDefault();
        try {
            const registerEndPoint = "http://localhost:5000/api/register"
            const emailRegularExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (formData.email && !emailRegularExpression.test(formData.email)) {
                toast.error('Please Enter a Valid Email..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return
            }
            const response = await axios.post(registerEndPoint, {
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            })

            if (response.status == 200) {
                toast.success('Register Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setFormdata({ email: '', password: '', confirmPassword: '' })
                localStorage.setItem("userEmail", formData.email)
                history("/");
            }
        } catch (e) {
            console.log(`Internal Server Error : ${e}`)
            if (e.response && e.response.status == 400) {
                toast.error(e.response.data.message || "Validation error!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                toast.error('Intenal Server Error..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            const loginEndPoint = "http://localhost:5000/api/login"
            const emailRegularExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (loginData.email && !emailRegularExpression.test(loginData.email)) {
                toast.error('Please Enter a Valid Email..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return
            }

            const response = await axios.post(loginEndPoint, {
                email: loginData.email,
                password: loginData.password
            })

            if (response.status == 200) {
                toast.success('Login Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setLoginData({ email: '', password: '' })
                localStorage.setItem("userEmail", loginData.email)
                history("/");
            }
        } catch (e) {
            console.log(`Internal Server Error : ${e}`);
            if (e.response && e.response.status == 400) {
                toast.error(e.response.data.message || "Validation error!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                toast.error('Intenal Server Error..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }
    }


    return (
        <CustomLayout>
            <section className='flex justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1.0, delay: 1 }}
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
                                    <form className='absolute left-10 items-center flex flex-col gap-5'>
                                        <div className="mainTitle">
                                            <h1 className='text-2xl font-bold'>Registration</h1>
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Email : </span>
                                            <input type="text"
                                                value={formData.email}
                                                name="email"
                                                onChange={handleChange}
                                                id="email"
                                                className='text-black p-2'
                                            />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Password : </span>
                                            <input type="password"
                                                value={formData.password}
                                                name="password"
                                                onChange={handleChange}
                                                id="password"
                                                className='text-black p-2'
                                            />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Confirm Password : </span>
                                            <input type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                id="confirmpassword"
                                                className='text-black p-2'
                                            />
                                        </div>
                                        <div className="loginNav flex gap-2">
                                            <span>Are you Registered?</span>
                                            <span onClick={checkLoginStatus} className='cursor-pointer'>Login</span>
                                        </div>
                                        <div className='flex gap-3'>
                                            <button onClick={registration} class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-1 rounded-lg text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
                                                Register
                                            </button>
                                            <GoogleOAuthProvider clientId={clientId}>
                                                <GoogleLogin
                                                    onSuccess={(res) => {
                                                        const decoded = jwtDecode(res.credential);
                                                        const user = decoded.email;
                                                        localStorage.setItem("userEmail", JSON.stringify(user))
                                                        if (user) {
                                                            history("/");
                                                        }
                                                        console.log(`Login Success : ${res}`)
                                                        toast.success('Login Successfully', {
                                                            position: "top-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                            theme: "dark",
                                                            transition: Bounce,
                                                        });
                                                    }}
                                                    onError={(res) => {
                                                        console.log(`Error Occured : ${res}`)
                                                    }}
                                                />
                                            </GoogleOAuthProvider>
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
                                            <input
                                                type="text"
                                                name="email"
                                                onChange={handleChangeLoginData}
                                                value={loginData.email}
                                                id="email"
                                                className='text-black p-2' />
                                        </div>
                                        <div className="email flex flex-col items-start">
                                            <span className="email">Password : </span>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChangeLoginData}
                                                value={loginData.password}
                                                id="password"
                                                className='text-black p-2' />
                                        </div>
                                        <div className="loginNav flex gap-2">
                                            <span>Are you New User?</span>
                                            <span onClick={checkLoginStatus} className='cursor-pointer'>Register</span>
                                        </div>
                                        <div>
                                            <button onClick={login} class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-1 rounded-lg text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
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
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 1.0, delay: 1 }}
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
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 1.0, delay: 1 }}
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                //transition={Bounce}
                />
            </section>
        </CustomLayout>
    )
}

export default Login
