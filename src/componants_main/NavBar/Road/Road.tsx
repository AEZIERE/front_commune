import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useGetAllMaillesLevels } from "../../../api/maillage";
import { info } from "sass";
import "./Road.scss";
const Road = () => {
	// TODO : add les maille inf  pour selecter sans la map
	// TODO : add action onClick pour changer la maille selectioner
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const dispatch = useAppDispatch();

	const [list, setList] = React.useState<{ nom: string; code: string; level: string }[]>([]);

	const infoMailles = useGetAllMaillesLevels({
		maille: currentZone.level,
		code: currentZone.code,
		isEnabled: true && currentZone.code !== "",
	});
	useEffect(() => {
		if (!infoMailles || infoMailles.isLoading) return;
		if (currentZone.code === "" && currentZone.level === "nation")
			setList([{ nom: "France", code: "", level: "nation" }]);
		else if (currentZone.level === "region") {
			setList([
				{ nom: "France", code: "", level: "nation" },
				{ nom: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
			]);
		} else if (currentZone.level === "departement") {
			console.log(infoMailles.data);

			setList([
				{ nom: "France", code: "", level: "nation" },
				{ nom: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
				{ nom: infoMailles.data?.libelleDept, code: infoMailles.data?.codeDept, level: "departement" },
			]);
		} else if (currentZone.level === "commune") {
			setList([
				{ nom: "France", code: "", level: "nation" },
				{ nom: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
				{ nom: infoMailles.data?.libelleDept, code: infoMailles.data?.codeDept, level: "departement" },
				{ nom: infoMailles.data?.libelleCommune, code: infoMailles.data?.codeCommune, level: "commune" },
			]);
		}
	}, [infoMailles.data, currentZone]);

	const handleClick = (item: { nom: string; code: string; level: string }) => {
		dispatch({ type: "mapState/setCurrentZone", payload: { name: item.nom, code: item.code, level: item.level } });
		dispatch({ type: "mapState/setSelectedZone", payload: { name: "", code: "", level: "" } });
	};

	return (
		<div id="road">
			{list.map((item) => (
				<span
					key={item.nom + item.level}
					onClick={() => handleClick(item)}
					className={item.level === currentZone.level ? "IsLevel" : ""}
				>
					{" - "} {item.nom} {item.code} {item.level}
				</span>
			))}
		</div>
	);
};

export default Road;
