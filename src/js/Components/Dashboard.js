import React from 'react'
import { Nav, NavDropdown,Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from"../img/logo.png";
import '../../css/dashboardcss.css';


const Dashboard = () => {
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
                            <NavLink className=" text-white"  to="/Dashboard"><label>Home</label></NavLink>  
                        </Nav>
                        
                        
                       
                        <Nav className="m-3 " >
                                 <NavDropdown  className="text-light" style={{}} title="Location" id="collasible-nav-dropdown">
                                 <NavDropdown.Item >
                                    <NavLink className="text-dark"  to="/StateRegis"><label>State Registration</label></NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink  className=" text-dark" to="/CityRegis"><label>City Registration</label></NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink className=" text-dark"  to="/AreaRegis"> <label>Area Registration</label></NavLink>
                                </NavDropdown.Item >
                                </NavDropdown>
                        </Nav>
                       
                        
                         
                        <Nav className="m-3 ">
                        <NavDropdown  className="text-light" style={{}} title="Report" id="collasible-nav-dropdown">
                                 <NavDropdown.Item >
                                    <NavLink className="text-dark"  to="/StateReport"><label>State Report</label></NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink  className=" text-dark"  to="/CityReport"><label>City Report</label></NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink className=" text-dark"  to="/AreaReport"> <label> Area Report</label></NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink className=" text-dark"  to="/User"><label>User</label></NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink className=" text-dark"  to="/CollegetypeReport"><label>College Type Report</label></NavLink>
                                </NavDropdown.Item >
    
    

                                </NavDropdown>
                            
                        </Nav>

                        <Nav className="m-3 " >
                                 <NavDropdown  className="text-light" style={{}} title="Component" id="collasible-nav-dropdown">
                                 <NavDropdown.Item >
                                    <NavLink className="text-dark"  to="/Collegetype"><label>College Type</label></NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink  className=" text-dark"  to="/MemberRegis"><label>Member Registration</label></NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink className=" text-dark"  to={"/MemberReport"}> <label>Member Report</label></NavLink>
                                </NavDropdown.Item >
                                </NavDropdown>
                        </Nav>
                       

                        <Nav className="m-3 ">
                            <NavLink className=" text-white "  to={"/ "}><label>Signout</label></NavLink>
                        </Nav>
                    
                    
                    </Navbar.Collapse>
                </Navbar>

        
        </>
    );
};

export default Dashboard;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Navbar, NavDropdown, Nav, NavLink } from 'react-bootstrap';
// import logo from '../img/logo.png'

// const Dashboard = () => {
//     return (
//         <>
//             <Navbar collapseOnSelect expand="lg"
//                 style={{ height: "60px", backgroundColor: "#0B0B45" }}>
//                 <img className='rounded-circle border border-light m-2' src={logo}
//                     style={{ height: "40px", width: "40px", borderRadius: "30" }} />
//                 <Navbar.Brand className='text-light'>College Career</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar-nav'
//                     style={{ background: '#ff0000', marginRight: '10px' }} />
//                 <Navbar.Collapse id='responsive-navbar-nav'>
//                     <Nav className=' mr-auto text-light'>
//                         <NavLink>
//                             Home
//                         </NavLink>
//                     </Nav>
//                     <Nav className='mr-auto'>
//                         <NavDropdown title="location" id='nav-dropdown-title'>
//                             <NavDropdown.Item>
//                                 <NavLink to="/stateregis">
//                                     <label>State</label>
//                                 </NavLink>

//                             </NavDropdown.Item>
//                             <NavDropdown.Item>
//                                 <NavLink to="/cityregis">
//                                     <label>City</label>
//                                 </NavLink>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item>
//                                 <NavLink to="/arearegis">
//                                     <label>Area</label>
//                                 </NavLink>
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav className=' mr-auto text-light'>
//                         <NavLink>
//                             Insert
//                         </NavLink>
//                     </Nav>

//                     <Nav className='mr-auto text-light'>
//                         <NavLink>
//                             Report
//                         </NavLink>

//                     </Nav>

//                     <Nav className=' mr-auto text-light'>
//                         <NavLink>
//                             Log out
//                         </NavLink>

//                     </Nav>

//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     );
// }

// export default Dashboard;