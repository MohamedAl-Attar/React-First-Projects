import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" style={{textDecoration : 'none' , color:'black' , fontSize : '30px'}}>Logo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-around me-auto">
            <Link style={{textDecoration : 'none' , color:'black' , marginLeft:'700px'}} to="/">Home</Link>
             <Link style={{textDecoration : 'none' , color:'black',marginLeft:'100px'}} to="/shop">Shop</Link>
             <Link style={{textDecoration : 'none' , color:'black',marginLeft:'100px'}} to="/counter">Counter</Link>
             <Link style={{textDecoration : 'none' , color:'black',marginLeft:'100px'}} to="/about">About</Link>
             <Link style={{textDecoration : 'none' , color:'black',marginLeft:'100px' , width : '55px'}} to="/login">Log In</Link>
             <Link style={{textDecoration : 'none' , color:'black',marginLeft:'80px' , width : '60px'}} to="/register">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar