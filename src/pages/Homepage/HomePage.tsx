import React from "react";
import "./HomePage.scss";
import SideBarFilter from "./componants/SideBarFilter/sideBarFilter";
import Map from "./componants/Map/MapReact";
import NavBar from "../../componants_main/NavBar/NavBar";
import SwitchPages from "../../componants_main/switchPages";
import BarChart from "../../componants_main/Chart/createChart";
import SideBarInfo from "./componants/SideBarInfo/SideBarInfo";
import SelectedButton from "./componants/SelectedButton";

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<div id="content">
				<SideBarFilter />
				<SwitchPages />
				<Map />
				<SelectedButton />
				<SideBarInfo />
			</div>
			<div id="footerBar">
				<div>FooterBar</div>
			</div>
		</div>
	);
};

export default HomePage;
