import React from "react";
import "./HomePage.scss";
import { enumNameTable, testEnum } from "../../api/utils";
import { userGetData } from "../../api/data";
import SideBarFilter from "./componants/SideBarFilter/sideBarFilter";
import Map from "./componants/Map/Map";
import NavBar from "../../componants_main/NavBar/NavBar";
import { AiOutlineDoubleRight } from "react-icons/ai";

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<div id="content">
				<SideBarFilter />
				<Map />
				<div id="sideBarRight">SideBarRight{/* Companante Info/Chart */}</div>
			</div>
			<div id="footerBar">
				<div>FooterBar</div>
			</div>
		</div>
	);
};

export default HomePage;
