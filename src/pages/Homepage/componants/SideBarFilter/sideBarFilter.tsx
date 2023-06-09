import React, { useState } from "react";
import FilterBouton from "./FilterBouton";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./sideBarFilter.scss";
import { useAppDispatch } from "../../../../hook";
import { add, remove } from "../../../../redux/filter/filter";

const SideBarFilter: React.FC = () => {
	const dispatch = useAppDispatch();
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const className = `list_button${isPanelOpen ? "--expanded" : ""}`;

	const list_bouton = ["industie", "scolaire", "demographie"];

	const handlePanelToggle = () => {
		setIsPanelOpen(!isPanelOpen);
	};

	return (
		<div id="sideBarLeft">
			<div className={className}>
				{list_bouton.map((item, index) => (
					<FilterBouton key={index} name={item} />
				))}
			</div>
			<div className="icon_extend">
				<AiOutlineDoubleRight onClick={handlePanelToggle}></AiOutlineDoubleRight>
			</div>
		</div>
	);
};

export default SideBarFilter;
