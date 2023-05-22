import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useGetCommuneOfDepartement, useGetCommuneOfRegion, useGetDepartementsOfRegion } from "../../../../api/maille";
import CreateChart from "../../../../componants_main/Chart/createChart";
import { useGetAllMailles, useGetMaillesLevels } from "../../../../api/maillage";
import { ControleMaille } from "../../../../api/api.type";
import "./SideBarInfo.scss";
import { usePostDataStats } from "../../../../api/data_stats";
import { usePostDataScolaire } from "../../../../api/data_scolaire";
import { usePostEntity } from "../../../../api/entity";

const SideBarInfo = () => {
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const filtre = useAppSelector((state) => state.filter.value);
	const [mailleInf, setMailleInf] = useState<string>("");
	const [listeRoute, setListeRoute] = useState<[]>([]);

	const [choix, setChoix] = useState<string>(currentZone.level);
	const [clickMaille, setClickMaille] = useState<object>({});
	const dispatch = useAppDispatch();

	const [communes, setCommunes] = useState<object[]>([]);

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
	const handleClick = (item: string) => {
		setChoix(item);
	};

	return (
		<div id="sideBarRight">
			<div className="top-button">
				<button onClick={() => handleClick(currentZone.level)}>{currentZone.level}</button>
				<button onClick={() => handleClick(mailleInf)}>{mailleInf}</button>
			</div>
			<div className="content">
				{choix === currentZone.level ? (
					<div>
						<CreateChart typeChart="bar" />
					</div>
				) : (
					<div className="list-maille">
						{listMailles.data?.map((item: { code: string; libelle: string }) => (
							<div className="item" onClick={() => setClickMaille(item)}>
								<span>{item.libelle}</span>
								<div className={clickMaille === item ? "display" : "cache"}>
									<CreateChart typeChart="bar" />
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SideBarInfo;
