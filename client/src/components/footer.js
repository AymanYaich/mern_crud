import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function footer() {
	return (
		<div id="footer">
			<footer class="text-center text-lg-start bg-light text-muted">
				<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="footer-icons">
						<a href="" class="me-4 text-reset">
							<i class="fab fa-facebook-f" />
						</a>
						<a href="/login" class="me-4 text-reset">
							<i class="fab fa-twitter" />
						</a>
						<a href="home" class="me-4 text-reset">
							<i class="fab fa-instagram" />
						</a>
						<a href="home" class="me-4 text-reset">
							<i class="fab fa-linkedin" />
						</a>
					</div>
				</section>

				<section class="">
					<div class="container text-center text-md-start mt-5">
						<div class="row mt-3">
							<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<div className="footer-title-container">
								<h5 class="text-uppercase fw-bold mb-4">
									<i class="fas fa-gem me-3" />Shoptodo
								</h5>
								</div>
								<div className="footer-img-container">
								<a href="/"><img  className="footer-img" src="./shoptodo.png" /></a>
							</div>
							</div>
							<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 class="text-uppercase fw-bold mb-4">Products</h6>
								<p>
									<a href="#!" class="text-reset">
										Electronics
									</a>
								</p>
								<p>
									<a href="#!" class="text-reset">
										Clothes
									</a>
								</p>
								<p>
									<a href="#!" class="text-reset" />
								</p>
								<p>
									<a href="#!" class="text-reset">
										Cosmetic
									</a>
								</p>
							</div>

							<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 class="text-uppercase fw-bold mb-4">Contact</h6>
								<p>
									<i class="fas fa-home me-3" /> Sfax,Gremda,3012 TN
								</p>
								<p>
									<i class="fas fa-envelope me-3" />aymenyaiche@yahoo.fr
									
								</p>
								<p>
									<i class="fas fa-phone me-3" /> + 216 44 135 148
								</p>
								
							</div>
						</div>
					</div>
				</section>
				<div class="text-center p-4">
					© {new Date().getFullYear()} Copyright:
					<a class="text-reset fw-bold" href="/">
						shoptodo.com
					</a>
				</div>
			</footer>
		</div>
	);
}
