import React from 'react';
//import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navigation() {
	return (
		<div class="sticky-top">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a href="/">
					<img src="/shopshop.png" width="70" height="40" className="mr auto align-top" alt="React" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav nav-pills mr-auto">
						<li class="nav-item ">
							<a class="nav-link" href="/add">
								Admin<span class="sr-only">(current)</span>
							</a>
						</li>

						<li class="nav-item  dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="/"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Products
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="/list">
									All
								</a>
								<div class="dropdown-divider" />
								<a class="dropdown-item" href="/electronic">
									Electronic
								</a>
								<a class="dropdown-item" href="/clothes">
									Clothes
								</a>
								<a class="dropdown-item" href="/cosmetic">
									Cosmetic
								</a>
							</div>
						</li>
						<li class="nav-item active">
							<a class="nav-link" href="/add">
								Register<span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item ">
							<a class="nav-link" href="/login">
								Login
							</a>
						</li>
					</ul>

					<div className="row">
						<div class="column">
							<a href="https://www.facebook.com/react/" target="blank" class="me-4 text-reset">
								<img style={{ height: 20, width: 20 }} src="/facebook.png" alt="" />
							</a>
						</div>
						<div class="column">
							<a href="https://www.facebook.com/react/" target="blank" class="me-4 text-reset">
								<img style={{ height: 20, width: 20 }} src="/ins.png" alt="" />
							</a>
            </div>
            <div class="column">
            <a href="https://www.facebook.com/react/" target="blank" class="me-4 text-reset">
              <img style={{ height: 20, width: 20 }} src="/linkedin.png" alt="" />
            </a>
          </div>
					</div>

					<form class="form-inline my-2 my-lg-0">
						<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
