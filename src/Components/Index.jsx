import React from 'react'
import CustomLayout from './Layout/CustomLayout'
import ChipAnimation from './Chip Animation/ChipAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faMicrochip, faRocket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Index = () => {
  return (
    <CustomLayout>
      <section className='relative'>
        <motion.div
          initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
          animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
          exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
          transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
        >
          <div className="icons absolute left-[10%] text-2xl">
            <FontAwesomeIcon icon={faMicrochip} className='text-white' />
          </div>
          <div className="icons absolute left-[5%] top-[13%] text-2xl">
            <FontAwesomeIcon icon={faMicrochip} className='text-[#84bdae]' />
          </div>
          <div className="icons absolute left-[92%] top-[74%] text-2xl">
            <FontAwesomeIcon icon={faMicrochip} className='text-[#84bdae]' />
          </div>
          <div className="icons absolute left-[85%] top-[85%] text-2xl">
            <FontAwesomeIcon icon={faMicrochip} className='text-white' />
          </div>
        </motion.div>
        <section className='flex justify-center items-center flex-col gap-5'>
          <motion.div
            initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
            animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
            exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
            transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
          >
            <div className="design h-[400px] w-[900px] bg-black rounded-[50%] flex justify-center items-center shadow-designBox relative">

              <div className="titlesandanimation text-white flex flex-col justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                  animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                  exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                  transition={{ duration: 1.0, delay: 2 }}   // Smooth transition
                >
                  <div className="animation realtive">
                    <ChipAnimation />
                  </div>
                </motion.div>
                <div className="titles absolute top-[35%]">
                  <div className="mainTitle">
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                      animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                      exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                      transition={{ duration: 1.0, delay: 2 }}   // Smooth transition
                    >
                      <h1 className='text-[4rem] font-bold'>CRITIC_LAUNCH_115</h1>
                    </motion.div>
                  </div>
                  <div className="description text-[1.5rem] font-bold text-[#84bdae]">
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                      animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                      exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                      transition={{ duration: 1.0, delay: 2 }}   // Smooth transition
                    >
                      <h3>Your AI-Powered Art Studio!</h3>
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
            animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
            exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
            transition={{ duration: 1.0, delay: 1 }}   // Smooth transition
          >
            <div className="design h-[200px] w-[600px] bg-black rounded-[50%] flex justify-center items-center shadow-designBox2 relative">
              <motion.div
                initial={{ opacity: 0, y: 0 }}  // Start invisible & move up
                animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
                exit={{ opacity: 0, y: -50 }}    // Fade out & move up when leaving
                transition={{ duration: 1.0, delay: 2 }}   // Smooth transition
              >
                <div className="btns flex gap-10">
                  <div className="firstBtn bg-transparent shadow-customInner p-3 rounded-[17%] border-white border-[0.01em]">
                    <Link to="/">
                      <div className="icon">
                        <FontAwesomeIcon icon={faRocket} className='text-white'></FontAwesomeIcon>
                      </div>
                      <div className="text-white">
                        Start Creating
                      </div>
                    </Link>
                  </div>
                  <div className="secondBtn p-3 shadow-customInner p-3 rounded-[17%] border-white border-[0.01em]">
                    <Link>
                      <div className="icon">
                        <FontAwesomeIcon icon={faFolder} className='text-white'></FontAwesomeIcon>
                      </div>
                      <div className="text-white">
                        Your AI Studio
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </section>
    </CustomLayout>
  )
}

export default Index
