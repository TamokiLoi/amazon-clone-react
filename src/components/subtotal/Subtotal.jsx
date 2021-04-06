import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import { useHistory } from "react-router-dom";

import "./Subtotal.css";

function Subtotal() {
	const history = useHistory();
	const [{ basket }] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items) <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button onClick={(e) => history.push("/payment")}>
				Process to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
