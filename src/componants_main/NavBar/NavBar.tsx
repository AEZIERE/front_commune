import React from "react";
import Road from "./Road/Road";
import Search from "./Search/Search";

const navBar = () => {
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

export default navBar;
