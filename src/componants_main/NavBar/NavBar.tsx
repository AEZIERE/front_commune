import React from "react";
import Road from "../NavBar/Road/Road";
import Search from "../NavBar/Search/Search";
import "./NavBar.scss";
import { useAppDispatch } from "../../hook";

const NavBar = () => {
	return (
		<div id="navBar">
			<div>
				<h1>Map Commune</h1>
				<Road />
			</div>
			<div>
				<Search />
			</div>
		</div>
	);
};

export default NavBar;
