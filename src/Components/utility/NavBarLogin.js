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
            <a href='/'>
            <img src={logo} className='logo'/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <FormControl 
              type='search'
              placeholder='البحث...'
              className='me-2 w-100 text-center'
            />
            <Nav className='me-auto'>
              <Nav.Link href='/login' className='nav-text d-flex mt-3 justify-content-center'>
                <img src={login}  className='login-img' alt='login-img'/>
                <p style={{color:"white"}}>دخول</p>
              </Nav.Link>
              <Nav.Link href='/cart'
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