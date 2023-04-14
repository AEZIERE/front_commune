import React from "react";
import "./HomePage.scss";
import { enumNameTable, testEnum } from "../../api/utils";
import { userGetData } from "../../api/data";
import AssetFilter from "../../componants/Filter/AssetFilter";
import AssetRoad from "../../componants/Road/AssetRoad";
import AssetSearch from "../../componants/Search/AssetSearch";

const HomePage = () => {
	return (
		<div>
			<div id="navBar">
				<div>
					<h1>Map Commune</h1>
					<AssetRoad />
				</div>
				<div>
					<AssetSearch />
				</div>
			</div>
			<div id="content">
				<div id="sideBarLeft">
					<AssetFilter />
				</div>
				<div id="map">
					HELLO
					{/* Companante Map */}
				</div>
				<div id="sideBarRight">SideBarRight{/* Companante Info/Chart */}</div>
			</div>
		</div>
	);
};

export default HomePage;
