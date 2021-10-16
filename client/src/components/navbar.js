import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';




export default function Navigation() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/add">Add</Nav.Link>
						<Nav.Link href="/custumers">List</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			
		</div>
	);
}
