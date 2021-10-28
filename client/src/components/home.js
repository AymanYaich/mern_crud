import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-material-ui-carousel';

export default function Home() {
	const imageSRC = [ '/parfum.jpg', '/computers.jpeg', '/clothes.jpeg' ];
	const toTop = (event) => {
		window.scrollTo(0, 0);
		event.preventDefault();
	};

	return (
		<div class="home">
			<div className="w3-row w3-padding-64" id="about">

				<div className="w3-col m6 w3-padding-large w3-hide-small">
					<img
						src="/ecommerce.svg"
						className="w3-round w3-image w3-opacity-min"
						alt="Table Setting"
						width="600"
						height="750"
					/>
				</div>
				<div className="about-us">
					<div className="w3-col m6 w3-padding-large">
						<h1 className="w3-center">About Shoptodo</h1>
						<h5 className="w3-center">Since 2020</h5>
						<p className="w3-large">
							{' '}
							<span>
								An e-commerce company based on Sfax Tunisia.Our business consist on online trading for
								special and exclusive items you can find only here.We deliver the product to the client
								in 24 hours for free fee.Trust us.
							</span>
						</p>
						<p className="w3-large w3-text-grey w3-hide-medium  ">
							Stay at home , make your choice , pay when you'll recieve your product. Trust us , our
							prices are the best , the cheaper in the market. If you find best ,don't hesitate to call
							us.
						</p>
					</div>
				</div>
			</div>

			<div id="carousel-images">
				<Carousel id="myCarousel">
					{imageSRC.map((src) => {
						return (
							<div>
								<img src={src} id="image-carousel" alt="" />
							</div>
						);
					})}
				</Carousel>
			</div>

			<div className="w3-row w3-padding-64" id="about">

			
					<div className="about-us">
						<div className="w3-col m6 w3-padding-large">

							<div id="paragraph-positon">
							<p className="w3-large">
								
								<span>
								<h3><span>	
								&#10003;</span>More than <span style={{color:"red",fontWeight:"bold", fontStyle:"italic"}}>1000</span>  products</h3>	
								</span>
								<span>
								<h3><span>	
								&#10003;</span>More than <span style={{color:"red",fontWeight:"bold",fontStyle:"italic"}}>100</span>  exclusive products</h3>	
								</span>
								<span>
								<h3>
								<span>	
								&#10003;</span>More than <span style={{color:"red",fontWeight:"bold",fontStyle:"italic"}}>20000</span> custumers</h3>	
								</span>
								<h3>
								<span>	
								&#10003;</span>More than <span style={{color:"red",fontWeight:"bold",fontStyle:"italic"}}>80</span> cars for delivery</h3>	
								
							</p>
							</div>
						</div>
					</div>
					<div className="w3-col m6 w3-padding-large w3-hide-small">
					<img  
					src="/ecommer2.png"
					 alt=""
					 className="w3-round w3-image w3-opacity-min"
					
						width="600"
						height="750" />
					</div>
				
			</div>
			<div id="toTopButton">
				<button type="button" class="btn btn-dark btn-floating btn-lg" id="btn-back-to-top" onClick={toTop}>
					<i class="fas fa-arrow-up" />
				</button>
			</div>
		</div>
	);
}
