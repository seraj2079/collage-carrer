import React from 'react'
import { Nav, NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from"../img/logo.png";
import '../../css/dashboardcss.css';


const DashboardMember = () => {
    return (
        <>

                <Navbar collapseOnSelect expand="lg"  style={{ background: '#0B0B45' }} >
                    <img className="rounded-cricle border border-light border  m-2"
                        src={logo} alt="logo.jpg" style={{ height: "50px", weight: "60px", borderRadius: "30px" }}  />
                   
                    <Navbar.Brand className="text-light text-lg" >
                        College Career
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: '#4D4DFF', marginRight: '10px', float:'right' }} />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        
                        <Nav className="m-3 ">
                            <NavLink className=" text-white"   to="/DashboardMember"><label>Home</label></NavLink>  
                        </Nav>
                        
                        
                       
                        <Nav className="m-3 " >
                                 <NavDropdown  className="text-light" style={{}} title="Report" id="collasible-nav-dropdown">
                                 <NavDropdown.Item >
                                    <NavLink className="text-dark"  to="/RegisReport"><label>App User</label></NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink  className=" text-dark"  to="/Registration"><label>Registration</label></NavLink>
                                </NavDropdown.Item >
                                
                                </NavDropdown>
                        </Nav>
                       
                        
                         
                        

                        <Nav className="m-3 ">
                            <NavLink className=" text-white " to="/"><label>Sign Out</label></NavLink>
                        </Nav>
                    
                    
                    </Navbar.Collapse>
                </Navbar>

        
        </>
    );
};

export default DashboardMember;
