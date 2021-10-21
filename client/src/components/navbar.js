import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
	return (
		    
			<div  class="sticky-top">
				<Navbar  bg="light" variant="light" >
					<Container >
					<Navbar.Brand id="navbar-image" href="/">
					<img src="/shoptodo.png" width="80" height="40" className="mr auto align-top" alt="React" />
				</Navbar.Brand>
						<Nav className="ml-auto ">
						<div className="navbar-links ">
							<Nav.Link  style={{width:"80px"}} href="/add">Add</Nav.Link>
							<Nav.Link  style={{width:"80px"}} href="/custumers">List</Nav.Link>
							<Nav.Link  style={{width:"80px"}} href="/register">Register</Nav.Link>
							<Nav.Link  style={{width:"80px"}}href="/login">Login</Nav.Link>
							</div>
						</Nav>
						
					</Container>
					
				</Navbar>
				
			</div>
			
		
	);
}
