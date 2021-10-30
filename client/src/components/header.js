import React from 'react';
import Carousel from 'react-material-ui-carousel';
export default function Header() {
	const imageList = [
		{
			src: '/cosmetic2.jpeg',
			category: 'Cosmetic'
		},
		{
			src: '/clothes2.jpeg',
			category: 'Clothes'
		},
		{
			src: '/phones.jpeg',
			category: 'Electonic'
		}
	];
	return (
		<div id="carousel-images2">
			<Carousel id="myCarousel2">
				{imageList.map((ele) => {
					return (
						<div>
							<div class="container">
								<img src={ele.src} alt="Norway" />
                                <div class="text-block">
                                <h4>{ele.category}</h4>
									
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
