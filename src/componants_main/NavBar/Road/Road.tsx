import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useGetMaillesLevels } from "../../../api/maillage";
import { info } from "sass";
const Road = () => {
	// TODO : add les maille inf  pour selecter sans la map
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const dispatch = useAppDispatch();

	const [list, setList] = React.useState<{ name: string; code: string; level: string }[]>([]);

	const infoMailles = useGetMaillesLevels({
		maille: currentZone.level,
		code: currentZone.code,
		isEnabled: true && currentZone.code !== "",
	});
	useEffect(() => {
		if (!infoMailles || infoMailles.isLoading) return;
		if (currentZone.code === "" && currentZone.level === "nation")
			setList([{ name: "France", code: "", level: "nation" }]);
		else if (currentZone.level === "region") {
			setList([
				{ name: "France", code: "", level: "nation" },
				{ name: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
			]);
		} else if (currentZone.level === "departement") {
			console.log(infoMailles.data);

			setList([
				{ name: "France", code: "", level: "nation" },
				{ name: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
				{ name: infoMailles.data?.libelleDept, code: infoMailles.data?.codeDept, level: "departement" },
			]);
		} else if (currentZone.level === "commune") {
			setList([
				{ name: "France", code: "", level: "nation" },
				{ name: infoMailles.data?.libelleRegion, code: infoMailles.data?.codeRegion, level: "region" },
				{ name: infoMailles.data?.libelleDept, code: infoMailles.data?.codeDept, level: "departement" },
				{ name: infoMailles.data?.libelleCommune, code: infoMailles.data?.codeCommune, level: "commune" },
			]);
		}

		console.log(infoMailles);
	}, [infoMailles.data, currentZone]);

	const handleClick = (item) => {
		console.log(item);
	};
	return (
		<div id="road">
			{list.map((item) => (
				<span className={item.level === currentZone.level ? "IsLevel" : ""}>
					{" >"} {item.name} {item.code} {item.level}
				</span>
			))}
		</div>
	);
};

export default Road;
