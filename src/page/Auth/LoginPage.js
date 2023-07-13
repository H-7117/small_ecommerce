import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div style={{minHeight:"600px"}}>
        <Container style={{minHeight:"610px"}}>
          <Row className='py-5 d-flex justify-content-center'>
            <Col sm="12" className='d-flex flex-column'>
              <label className='mx-auto title-login'>تسجيل الدخول</label>
              <input 
                placeholder='الايميل...'
                type='text'
                className='user-input my-3 text-center mx-auto'
              />
              <input 
                placeholder='كلمه السر...'
                type='password'
                className='user-input  text-center mx-auto'
              />
              <button className='btn-login mx-auto mt-4'>تسجيل الدخول</button>
              <label className='mx-auto my-4'>
                ليس لديك حساب ؟{" "}
                <span style={{cursor:"pointer"}} className='text-danger'>
                  اضغط  هنا
                </span>
              </label>
            </Col>
          </Row>

        </Container>
    </div>
  )
}

export default LoginPage