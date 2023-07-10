/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Navbar,Container,FormControl,Nav} from 'react-bootstrap'
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'
const NavBarLogin = () => {
  return (
    <Navbar className='sticky-top' bg='dark' variant='dark' expand='sm'>
      <Container>
          <Navbar.Brand>
            <img src={logo} className='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <FormControl 
              type='search'
              placeholder='البحث...'
              className='me-2 w-100 text-center'
            />
            <Nav className='me-auto'>
              <Nav.Link className='nav-text d-flex mt-3 justify-content-center'>
                <img src={login}  className='login-img' alt='login-img'/>
                <p style={{color:"white"}}>دخول</p>
              </Nav.Link>
              <Nav.Link
              className='nav-text d-flex mt-3 justify-content-center'
              style={{color:"white"}}
              >
                <img src={cart} className='login-img ' alt='cart-icon'/>
                <p style={{color:"white"}}>العربه</p>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLogin