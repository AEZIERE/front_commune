import React, { useState } from "react";
import FilterBouton from "../features/filter/FilterBouton";
import { AiOutlineDoubleRight } from "react-icons/ai";

const AssetFilter: React.FC = () => {
	const [isPanelOpen, setIsPanelOpen] = useState(false);
	const handlePanelToggle = () => {
		setIsPanelOpen(!isPanelOpen);
	};
	const list = ["industrie", "formation", "demographie"];

	return (
		<div>
			<AiOutlineDoubleRight onClick={handlePanelToggle}></AiOutlineDoubleRight>
			{isPanelOpen && (
				<div className="list_bouton_filter">
					{list.map((item) => (
						<FilterBouton key={item} name={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default AssetFilter;
