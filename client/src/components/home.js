import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

	const toTop = (event) => {
		window.scrollTo(10, 10);
        event.preventDefault();
    };
		
	
	return (
		<div class="home">
			<div className="w3-row w3-padding-64" id="about">
				<div className="w3-col m6 w3-padding-large w3-hide-small">
					<img
						src="/ecommerce.jpg"
						className="w3-round w3-image w3-opacity-min"
						alt="Table Setting"
						width="600"
						height="750"
					/>
				</div>
				<div className="w3-col m6 w3-padding-large">
					<h1 className="w3-center">About Shoptodo</h1>
					<h5 className="w3-center">Since 2020</h5>
					<p className="w3-large">
						{' '}
						<span>
							An e-commerce company based on Sfax Tunisia.Our business consist on online trading for
							special and exclusive items you can find only here.We deliver the product to the client in
							24 hours for free fee.Trust us.
						</span>
					</p>
					<p className="w3-large w3-text-grey w3-hide-medium  ">
						Stay at home , make your choice , pay when you'll recieve your product. Trust us , our prices
						are the best , the cheaper in the market. If you find best ,don't hesitate to call us.
					</p>
				</div>
			</div>
			<div id="carousel-images">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active" />
						<li data-target="#myCarousel" data-slide-to="1" />
						<li data-target="#myCarousel" data-slide-to="2" />
					</ol>

					<div className="carousel-inner">
						<div className="item active">
							<img id="image-carousel" src="/clothes.jpeg" alt="Los Angeles" />
						</div>

						<div className="item">
							<img id="image-carousel" src="/phones.jpeg" alt="Chicago" />
						</div>

						<div className="item">
							<img id="image-carousel" src="/computers.jpeg" alt="New York" />
						</div>
					</div>
					<a className="left carousel-control" href="#myCarousel" data-slide="prev">
						<span className="glyphicon glyphicon-chevron-left" />
						<span className="sr-only">Previous</span>
					</a>
					<a className="right carousel-control" href="#myCarousel" data-slide="next">
						<span className="glyphicon glyphicon-chevron-right" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div className="w3-row w3-padding-64" id="about">
				<div className="w3-col m6 w3-padding-large w3-hide-small">
					<img
						src="/ecommerce.jpg"
						className="w3-round w3-image w3-opacity-min"
						alt="Table Setting"
						width="600"
						height="750"
					/>
				</div>
				<div className="w3-col m6 w3-padding-large">
					<h1 className="w3-center">About Shoptodo</h1>
					<h5 className="w3-center">Since 2020</h5>
					<p className="w3-large">
						{' '}
						<span>
							An e-commerce company based on Sfax Tunisia.Our business consist on online trading for
							special and exclusive items you can find only here.We deliver the product to the client in
							24 hours for free fee.Trust us.
						</span>
					</p>
					<p className="w3-large w3-text-grey w3-hide-medium  ">
						Stay at home , make your choice , pay when you'll recieve your product . Trust us , our prices
						are the best , the cheaper in the market. If you find best ,don't hesitate to call us.
					</p>
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
