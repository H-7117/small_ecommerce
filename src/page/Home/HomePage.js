import React from 'react'
import NavBarLogin from '../../Components/utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductComponent from '../../Components/Product/CardProductComponent'

const HomePage = () => {
  return (
    
    <div className='font' style={{minHeight:"670px"}}>
      <NavBarLogin />
      <Slider />
      <HomeCategory/>
      <CardProductComponent />
    </div>
    
  )
}

export default HomePage