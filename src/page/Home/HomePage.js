import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductComponent from '../../Components/Product/CardProductComponent'
import DiscountSection from '../../Components/Home/DiscountSection'
import CardBrandComponent from '../../Components/Brand/CardBrandComponent'


const HomePage = () => {
  return (
    
    <div className='font' style={{minHeight:"670px"}}>
      
      <Slider />
      <HomeCategory/>
      <CardProductComponent title="الاكثر مبيعا" btntitle="المزيد" pathText='/allproduct'/>
      <DiscountSection />
      <CardProductComponent title="احدث الازياء" btntitle="المزيد" pathText='/allproduct'/>
      <CardBrandComponent title="المركات العالميه" btntitle="المزيد" />
      
    </div>
    
  )
}

export default HomePage