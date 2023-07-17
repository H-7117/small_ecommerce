import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCount from '../../Components/utility/SearchCount'
import { Container } from 'react-bootstrap'

const ShopProductsPage = () => {
  return (
    <div style={{minHeight:"650px"}}>
        <CategoryHeader/>
        <Container>

        <SearchCount title=' الترتيب 400'/>
        </Container>
    </div>
  )
}

export default ShopProductsPage