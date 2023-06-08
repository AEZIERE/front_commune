import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useGetCommuneOfDepartement, useGetDepartementsOfRegion } from "../../../../api/maille";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import CreateChart from "../../../../componants_main/DisplayData/createChart";
import { useGetAllMailles, useGetMaillesLevels } from "../../../../api/maillage";
import { ControleMaille, GetData } from "../../../../api/api.type";
import "./SideBarInfo.scss";

import { useGetDataOfMaille } from "../../../../api/data";
import { enumNameTable } from "../../../../api/utils";
import { useGetDataDemograpgieOfMaille } from "../../../../api/demographie";
import { use } from "echarts";
import Tableau from "../../../../componants_main/DisplayData/Tableau";
import { useGetDataCompanyOfMaille } from "../../../../api/company";
import { useGetDataScolaire, useGetStatsScolaireSup } from "../../../../api/data_scolaire";

type dataChart = { title: string; names: string[]; value: undefined };

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
	const [listeRoute, setListeRoute] = useState([]);

	const [listData, setListData] = useState<dataChart[]>([]);

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

	const data_api_demographie = useGetDataDemograpgieOfMaille({
		code: selectedZone.code !== "" ? selectedZone.code : currentZone.code,
		niveau: selectedZone.code !== "" ? selectedZone.level : currentZone.level,
		isEnable: filtre === "demographie",
	}).data;

	const data_api_industrie = useGetDataCompanyOfMaille({
		code: selectedZone.code !== "" ? selectedZone.code : currentZone.code,
		niveau: selectedZone.code !== "" ? selectedZone.level : currentZone.level,
		isEnable: filtre === "industie",
	}).data;

	const data_api_scolaire = useGetStatsScolaireSup({
		code: selectedZone.code !== "" ? selectedZone.code : currentZone.code,
		niveau: selectedZone.code !== "" ? selectedZone.level : currentZone.level,
		isEnable: filtre === "scolaire",
	}).data;

	useEffect(() => {
		console.log(filtre);

		switch (filtre) {
			case "demographie":
				if (!data_api_demographie) break;
				console.log("demographie");
				const data_demo = {
					title: "Démographie",
					names: ["deces", "menage", "population", "naissances"],
					value: data_api_demographie.demographie[0],
				};
				const data_logement = {
					title: "Logement",
					names: ["appartement", "logement", "logement_vac", "maison", "residence_sec", "residence_p"],
					value: data_api_demographie.logement[0],
				};
				const data_chomage = {
					title: "Chomage",
					names: [],
					value: data_api_demographie.chomage,
				};
				const data_emploi = {
					title: "Emploi",
					names: ["chomeurs", "emploi_total", "sphere_presentielle", "sphere_productive"],
					value: data_api_demographie.emploi[0],
				};
				setListData([data_demo, data_logement, data_emploi]);

				break;
			case "industie":
				if (!data_api_industrie) break;
				console.log("industrie");

				const data_entreprise_etablissement = {
					title: "Entreprise et établissement",
					names: [],
					value: data_api_industrie.entreprise_etablissement,
				};
				const name_banned = ["id_maille", "code_commune", "annee", "code"];

				const data_salaire = {
					title: "Salaire",
					names: Object.keys(data_api_industrie.salaire[0]).filter((item) => !name_banned.includes(item)),
					value: data_api_industrie.salaire[0],
				};
				const data_entreprise = {
					title: "Entreprise",
					names: Object.keys(data_api_industrie.entreprise[0] ?? []).filter((item) => !name_banned.includes(item)),
					value: data_api_industrie.entreprise[0],
				};
				setListData([data_salaire, data_entreprise]);
				break;
			case "scolaire":
				if (!data_api_scolaire) break;
				const label = ["formation", "insertion", "diplome"];
				// Handle the default case if needed
				break;
		}
		console.log(listData);
	}, [filtre, currentZone, data_api_demographie, data_api_industrie, selectedZone]);

	const handleClick = (item: object) => {
		if (clickMaille === item) setClickMaille({});
		else setClickMaille(item);
	};

	const handleClickReset = () => {
		dispatch({ type: "mapState/setSelectedZone", payload: { name: "", code: "", level: "" } });
	};

	const [typeDisplay, setTypeDisplay] = useState("charts");
	const handleClickDisplayType = (type: string) => {
		setTypeDisplay(type);
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
						<button onClick={() => handleClickDisplayType("charts")}>Charts</button>
						<button onClick={() => handleClickDisplayType("tableau")}>Tableaux</button>
						{typeDisplay === "tableau" && listData.map((item: any) => <Tableau data={item} />)}
						{typeDisplay === "charts" &&
							listData.map((item: any) => <CreateChart key={item.title} typeChart="bar" data={item} />)}
						{listData.length}
					</div>
				</div>
			)}
		</div>
	);
};

export default SideBarInfo;
