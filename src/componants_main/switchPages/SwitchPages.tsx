import React from "react";
import { useNavigate } from "react-router-dom";
import "./SwitchPages.scss";

const SwitchPages = () => {
	const navigate = useNavigate();

	const handleClick = (name: string) => {
		navigate("/" + name + "/");
	};
	return (
		<div id="SwitchPages">
			<div>
				<button onClick={() => handleClick("home")} name="home">
					Map
				</button>
			</div>
			<div>
				<button onClick={() => handleClick("product")}>Product</button>
			</div>
		</div>
	);
};

export default SwitchPages;
