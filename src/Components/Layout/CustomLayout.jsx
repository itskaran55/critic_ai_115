import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const CustomLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div style={{marginBottom : "100px"}}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default CustomLayout
