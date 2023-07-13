import React from 'react'
import {Container ,Row} from 'react-bootstrap'
import SubTitle from '../utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import clothe from '../../Images/clothe.png'
import cat2 from '../../Images/cat2.png'
import labtop from '../../Images/labtop.png'
import sale from '../../Images/sale.png'
import pic from '../../Images/pic.png'
const CategoryContainer = () => {
  return (
    <Container>
      <div className='admin-content-text mt-2'>كل التصنيفات</div>
        <Row className='my-2 d-flex justify-content-between'>
        
        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />
        <CategoryCard background='#FFFF00' img={cat2} title="اجهزه" />
        <CategoryCard background='#0034FF' img={labtop} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={sale} title="اجهزه" />
        <CategoryCard background='#FF6262' img={pic} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />
        
        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />
        <CategoryCard background='#FFFF00' img={cat2} title="اجهزه" />
        <CategoryCard background='#0034FF' img={labtop} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={sale} title="اجهزه" />
        <CategoryCard background='#FF6262' img={pic} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />

        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />
        <CategoryCard background='#FFFF00' img={cat2} title="اجهزه" />
        <CategoryCard background='#0034FF' img={labtop} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={sale} title="اجهزه" />
        <CategoryCard background='#FF6262' img={pic} title="اجهزه" />
        <CategoryCard background='#F4DBA4' img={clothe} title="اجهزه" />

        </Row>
    </Container>
  )
}

export default CategoryContainer