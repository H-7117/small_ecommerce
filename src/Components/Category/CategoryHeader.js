import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className='cat-header'>
        
            <Container>
                <Row>
                    <Col className='d-flex justify-content-start py-2 flex-wrap'>
                    <div className='cat-text-header'>الكل</div>
                    <div className='cat-text-header'>الكترونيات</div>
                    <div className='cat-text-header'>ملابس</div>
                    <div className='cat-text-header'>كهربيات</div>
                    <div className='cat-text-header'>تخفيضات</div>
                    <div className='cat-text-header'>تخفيضات</div>
                    <div className='cat-text-header'>تخفيضات</div>
                    <div className='cat-text-header'>تخفيضات</div>
                    <div className='cat-text-header'>تخفيضات</div>
                    <div className='cat-text-header'>الكل</div>
                    </Col>
                </Row>
            </Container>
        
    </div>
  )
}

export default CategoryHeader