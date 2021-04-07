import React from "react";
import { useStateValue } from "../../store/StateProvider";
import { TYPES } from "../../store/type";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		// dispatch the item into the dataLayer
		dispatch({
			type: TYPES.ADD_TO_BASKET,
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image: image,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt={title} />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
