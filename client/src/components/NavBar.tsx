import { Link } from 'react-router-dom'

import Logo from '../img/Logo.svg'

import { Navbar, Button } from 'flowbite-react'

function NavBar() {
  return (
    <Navbar
  fluid={true}
  rounded={true}
  className="sticky top-0 shadow-xl !px-8 lg:!px-20"
>
  <Link to="/">
    <Navbar.Brand>
      <img
        src={Logo}
        className="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
    </Navbar.Brand>
  </Link>
  <div className="flex md:order-2">
    <div className="flex flex-row gap-2">
      <Link to="/login">
        <Button className="hidden md:flex">
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button outline={true} className="hidden md:flex">
          Get Started
        </Button>
      </Link>
      <Navbar.Toggle />
    </div>
  </div>
  <Navbar.Collapse>
    <Link to="/">
      Home
    </Link>
    <Link to="/services">
      Services
    </Link>
    <Link to="/pricing">
      Pricing
    </Link>
    <Link to="/about">
      About
    </Link>
    <Link to="/contact">
      Contact
    </Link>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;