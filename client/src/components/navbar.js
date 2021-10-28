import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navigation() {
	return (
		<div class="sticky-top">
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand id="navbar-image" href="/">
						<img src="/shopshop.png" width="100" height="90" className="mr auto align-top" alt="React" />
					</Navbar.Brand>
					
					<Nav className="ml-auto ">
					<table>
					<tr>
						<td>
							<a href="/" class="me-4 text-reset">
								<i class="fab fa-facebook-f" />
							</a>
						</td>
						
					</tr>
					<tr>
						<td>
							<a href="/" class="me-4 text-reset">
								<i class="fab fa-instagram" />
							</a>
						</td>
					</tr>
				</table>
						<div className="navbar-links ">
					
							<Nav.Link style={{ width: '80px' }} href="/add">
								Add
							</Nav.Link>
							<Nav.Link style={{ width: '80px' }} href="/custumers">
								List
							</Nav.Link>
							<Nav.Link style={{ width: '80px' }} href="/register">
								Register
							</Nav.Link>
							<Nav.Link style={{ width: '80px' }} href="/login">
								<i class="fas fa-user" />
							</Nav.Link>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
