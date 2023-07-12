import React from 'react'
import NavBarLogin from '../../Components/utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductComponent from '../../Components/Product/CardProductComponent'
import DiscountSection from '../../Components/Home/DiscountSection'
import CardBrandComponent from '../../Components/Brand/CardBrandComponent'
import Footer from '../../Components/utility/Footer'


const HomePage = () => {
  return (
    
    <div className='font' style={{minHeight:"670px"}}>
      <NavBarLogin />
      <Slider />
      <HomeCategory/>
      <CardProductComponent title="الاكثر مبيعا" btntitle="المزيد"/>
      <DiscountSection />
      <CardProductComponent title="احدث الازياء" btntitle="المزيد" />
      <CardBrandComponent title="المركات العالميه" btntitle="المزيد"/>
      <Footer />
    </div>
    
  )
}

export default HomePage