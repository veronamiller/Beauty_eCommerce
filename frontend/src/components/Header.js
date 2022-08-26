import React from 'react'
import { LinkContainer , Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="primary " variant='dark' expand="lg" collabseOnSelect>
  <Container>
    <Navbar.Brand href="/">SilkSkin</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header