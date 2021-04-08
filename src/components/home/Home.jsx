import React from "react";
import Product from "../product/Product";

import "./Home.css";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img src="/banner-amazon.jpeg" alt="banner" className="home__image" />

				<div className="home__row">
					<Product
						id="lp_16225016011_1_2"
						title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
						price={358.95}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
					/>
					<Product
						id="lp_16225016011_1_5"
						title="Playstation DualSense Wireless Controller"
						price={69.98}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="lp_16225016011_1_9"
						title="The Legend of Zelda: Breath of the Wild - Nintendo Switch"
						price={56.40}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81KGsbq8ekL._SL1500_.jpg"
					/>
					<Product
						id="lp_16225016011_1_11"
						title="Ring Fit Adventure - Nintendo Switch"
						price={89.00}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81V7L6auixL._SL1500_.jpg"
					/>
					<Product
						id="3254354345"
						title="New Apple iPAd Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSuXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
