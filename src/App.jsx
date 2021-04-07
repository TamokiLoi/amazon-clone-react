import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Payment from "./components/payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "./store/StateProvider";
import { TYPES } from "./store/type";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./App.css";

const promise = loadStripe(
	"pk_test_51IdXuQEeAfgmVmLVezBqG2IPZ0cVx3xOW9GYtm4BCFEjEmW4ygLowx2X9pdGX1rdk7muQeuKRdCJ0ttVk7CI4B7H0050tPCtKJ"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// will only run once when the app component loads...
		auth.onAuthStateChanged((authUser) => {
			console.log("The User is >>> ", authUser);

			if (authUser) {
				// the user just logged in / the user was logged in
				dispatch({
					type: TYPES.SET_USER,
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: TYPES.SET_USER,
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/orders">
						<Header />
						{/* <Orders /> */}
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
