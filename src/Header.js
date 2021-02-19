import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <div class="wrapper">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="" ></Navbar.Brand>
                        <Navbar.Toggle >
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="">
                                <Nav.Link exact="true" to="/">Home</Nav.Link>
                                <Nav.Link to="/">Products</Nav.Link>
                                <Nav.Link to="/about">About</Nav.Link>
                                <Nav.Link to={{pathname:'/service'}}>Service</Nav.Link>
                                <Nav.Link to="/users">User</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>)
    }
}
export default Header;