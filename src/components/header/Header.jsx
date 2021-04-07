import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import { auth } from "../../firebase";

import "./Header.css";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	const renderLoginOrLogout = () => {
		return (
			<>
				<div
					onClick={handleAuthentication}
					className="header__option"
					style={{ cursor: "pointer" }}
				>
					<span className="header__optionLineOne">
						Hello {!user ? "Guest" : user.email}
					</span>
					<span className="header__optionLineTwo">
						{user ? "Sign Out" : "Sign In"}
					</span>
				</div>
			</>
		);
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="logo"
					className="header__logo"
				/>
			</Link>

			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				{user ? (
					renderLoginOrLogout()
				) : (
					<Link to={!user && "/login"}>{renderLoginOrLogout()}</Link>
				)}

				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
