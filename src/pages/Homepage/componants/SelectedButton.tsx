import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";

const SelectedButton = () => {
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const dispatch = useAppDispatch();
	const [deterniment, setDeterniment] = useState("de ");
	const handClick = () => {
		dispatch({
			type: "mapState/setCurrentZone",
			payload: { name: selectedZone.name, code: selectedZone.code, level: selectedZone.level },
		});
		dispatch({ type: "mapState/setSelectedZone", payload: { name: "", code: "", level: "" } });
		dispatch({
			type: "road/add",
			payload: { name: selectedZone.name, code: selectedZone.code, level: selectedZone.level },
		});
	};

	useEffect(() => {
		if (!selectedZone.level) return;
		switch (selectedZone.level) {
			case "nation":
				setDeterniment("de la ");
				break;
			case "region":
				setDeterniment("de la ");
				break;
			case "departement":
				setDeterniment("du ");
				break;
			case "epci":
				setDeterniment("de l'");
				break;
			case "commune":
				setDeterniment("de la ");
				break;
			default:
				setDeterniment("de");
				break;
		}
	}, [selectedZone]);
	return (
		<div id="SelectedMaille">
			{selectedZone.code !== "" && (
				<button onClick={handClick}>
					Selection {deterniment} {selectedZone.level} {selectedZone.name} {selectedZone.code}
				</button>
			)}
		</div>
	);
};

export default SelectedButton;
