import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useGetCommuneOfDepartement, useGetDepartementsOfRegion } from "../../../../api/maille";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import CreateChart from "../../../../componants_main/Chart/createChart";
import { useGetAllMailles, useGetMaillesLevels } from "../../../../api/maillage";
import { ControleMaille, GetData } from "../../../../api/api.type";
import "./SideBarInfo.scss";
import { usePostDataStats } from "../../../../api/data_stats";
import { usePostDataScolaire } from "../../../../api/data_scolaire";
import { usePostEntity } from "../../../../api/entity";
import { useGetDataOfMaille } from "../../../../api/data";
import { enumNameTable } from "../../../../api/utils";

const getCommunes = (currentZone: { code: any; level: string; name: string }) => {
	const departementOfRegion = useGetDepartementsOfRegion({
		code_region: currentZone.code,
		isEnable: currentZone.level === "region",
	});
	const listCodeDepartement = departementOfRegion.data?.map((item: { code: string }) => item.code);
	console.log(listCodeDepartement);

	const communeOfDepartement = useGetCommuneOfDepartement({
		code_departement: listCodeDepartement ? listCodeDepartement[0] : "84",
		isEnable: currentZone.level === "region",
	});
	console.log(communeOfDepartement.data);

	const itemCommune = useGetCommuneOfDepartement({
		code_departement: currentZone.code,
		isEnable: currentZone.level === "departement",
	});
	return itemCommune.data;
};

const SideBarInfo = () => {
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const filtre = useAppSelector((state) => state.filter.value);
	const [mailleInf, setMailleInf] = useState<string>("");
	const [listeRoute, setListeRoute] = useState<[]>([]);

	const [choix, setChoix] = useState<string>(currentZone.level);
	const [clickMaille, setClickMaille] = useState<object>({});
	const dispatch = useAppDispatch();

	// TODO : fix niveau back pour faire tout sur une requete
	const listMailles = useGetAllMailles({
		maille_source: currentZone.level,
		code: currentZone.code,
		maille_dest: mailleInf,
		isEnabled: choix === mailleInf,
	});

	useEffect(() => {
		switch (currentZone.level) {
			case "nation":
				setMailleInf("region");
				break;
			case "region":
				setMailleInf("departement");
				break;
			case "departement":
				setMailleInf("commune");
				break;
			default:
				// Handle the default case if needed
				break;
		}
	}, [currentZone]);
	const data_stats = usePostDataStats({ code_communes: ["e", "z"], isEnable: filtre === "demographie" });
	const data_scolaire = usePostDataScolaire({ code_communes: ["e", "z"], isEnable: filtre === "scolaire" });
	const data_entity = usePostEntity({ code_communes: ["e", "z"], isEnable: filtre === "entity" });

	const data_demo = useGetDataOfMaille({
		name_table: enumNameTable.demographie,
		code: currentZone.code,
		niveau: currentZone.level,
		isEnable: filtre === "demographie" && currentZone.code !== "",
	});
	const data_eta = useGetDataOfMaille({
		name_table: enumNameTable.etablissement_scolaires,
		code: currentZone.code,
		niveau: currentZone.level,
		isEnable: filtre === "education" && currentZone.code !== "",
	});
	console.log(data_eta.data);
	console.log(data_demo.data);

	const handleClick = (item: object) => {
		if (clickMaille === item) setClickMaille({});
		else setClickMaille(item);
	};

	const handleClickReset = () => {
		dispatch({ type: "mapState/setSelectedZone", payload: { name: "", code: "", level: "" } });
	};

	return (
		<div id="sideBarRight">
			{selectedZone.name === "" ? (
				<div>
					<div className="top-button">
						<button onClick={() => setChoix(currentZone.level)}>{currentZone.level}</button>
						<button onClick={() => setChoix(mailleInf)}>{mailleInf}</button>
					</div>
					<div className="content">
						<span>Filtre données : {filtre}</span>
						{choix === currentZone.level ? (
							<div className="infoMaillePrincipal">
								<CreateChart typeChart="bar" />
							</div>
						) : (
							<div className="list-mailles">
								{listMailles.data?.map((item: { code: string; libelle: string }) => (
									<div className="item" onClick={() => handleClick(item)}>
										<span>
											<p>{item.libelle}</p>

											{clickMaille === item ? (
												<MdOutlineCloseFullscreen></MdOutlineCloseFullscreen>
											) : (
												<MdOpenInFull></MdOpenInFull>
											)}
										</span>
										<div className={clickMaille === item ? "display" : "cache"}>
											<CreateChart typeChart="bar" />
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			) : (
				<div>
					<div className="top-button">
						<button onClick={handleClickReset}>reset select</button>
					</div>
					<div className="content">
						<span>Filtre données : {filtre}</span>
						Charts // données
					</div>
				</div>
			)}
		</div>
	);
};

export default SideBarInfo;
