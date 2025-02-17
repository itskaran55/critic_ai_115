import React from 'react'
import CustomLayout from './Layout/CustomLayout'
import ChipAnimation from './Chip Animation/ChipAnimation'

const Index = () => {
  return (
    <CustomLayout>
      <section className='flex justify-center items-center flex-col gap-5'>
        <div className="design h-[400px] w-[900px] bg-black rounded-[50%] flex justify-center items-center shadow-designBox relative">
          <div className="titlesandanimation text-white flex flex-col justify-center items-center">
            <div className="animation realtive">
              <ChipAnimation />
            </div>
            <div className="titles absolute top-[35%]">
              <div className="mainTitle">
                <h1 className='text-[4rem] font-bold'>CRITIC_AI_115</h1>
              </div>
              <div className="description text-[1.5rem] font-bold text-[#84bdae]">
                <h3>Your AI-Powered Art Studio!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="design h-[200px] w-[600px] bg-black rounded-[50%] flex justify-center items-center shadow-designBox2 relative"></div>
      </section>
    </CustomLayout>
  )
}

export default Index
