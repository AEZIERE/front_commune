import React, { useEffect } from "react";
import { useGetCommunes, useGetDepartements, useGetRegion } from "../../../api/maille";
import { GetMailleBasic, GetMailleCommune, GetMailleDepartement } from "../../../api/api.type";
import { useDebounce } from "react-use";
import "./Search.scss";
import { useAppDispatch } from "../../../hook";

const Search = () => {
	const dispatch = useAppDispatch();

	const [state, setState] = React.useState("Typing stopped");
	const [val, setVal] = React.useState("");
	const [debouncedValue, setDebouncedValue] = React.useState("");

	//Cal API gouv for search
	const data_commun = useGetCommunes({
		valueInput: debouncedValue,
		isEnabled: debouncedValue !== "" && debouncedValue !== "France",
	});
	const data_departement = useGetDepartements({
		valueInput: debouncedValue,
		isEnabled: debouncedValue !== "" && debouncedValue !== "France",
	});
	const data_region = useGetRegion({
		valueInput: debouncedValue,
		isEnabled: debouncedValue !== "" && debouncedValue !== "France",
	});

	const className = `searchInput ${debouncedValue !== "" ? "active" : "inactive"}`;

	const [, cancel] = useDebounce(
		() => {
			setState("Typing stopped");
			setDebouncedValue(val);
			console.log("debouncedValue", debouncedValue);
		},
		1000,
		[val]
	);

	const trieData = () => {
		let data: any[] = [];
		let response: any[] = [];

		if (data_commun.data !== undefined) {
			data_commun.data.map((item) => {
				item.niveau = "commune";

				data.push(item);
			});
		}
		if (data.length < 5) {
			if (data_departement.data !== undefined) {
				data_departement.data.map((item) => {
					item.niveau = "departement";
					data.push(item);
				});
			}
		}
		if (data.length < 5) {
			if (data_region.data !== undefined) {
				data_region.data.map((item: any) => {
					item.niveau = "region";
					data.push(item);
				});
			}
		}
		let list = data.slice(0, 5);
		if (
			val in ["France", "france", "FRANCE", "Fr", "fr", "FR", "Fra", "fra", "FRA"] ||
			val.includes("Fra") ||
			val.includes("fra") ||
			val.includes("FRA")
		) {
			list.push({ nom: "France", code: "", niveau: "nation" });
		}
		return list;
	};

	const handleOnClick = (item: any) => {
		setVal(item.nom + " " + item.code);
		dispatch({ type: "mapState/setSelectedZone", payload: { name: item.nom, code: item.code, level: item.niveau } });
		dispatch({ type: "mapState/setCurrentZone", payload: { name: item.nom, code: item.code, level: item.niveau } });
	};

	return (
		<div className={className}>
			<div className="top">
				<input
					type="search"
					value={val}
					placeholder="Saisir une adresse.."
					onChange={({ currentTarget }) => {
						setState("Waiting for typing to stop...");
						setVal(currentTarget.value);
					}}
				/>
				<span className="clear-icon" onClick={() => setVal("")}></span>
			</div>
			{debouncedValue !== "" && val !== "" && (
				<div className="suggestion">
					{trieData().map((item: any) => {
						return (
							<span key={item.code} onClick={() => handleOnClick(item)}>
								<p>
									{item.nom} {item.code}
								</p>
								<p>
									{Object.keys(item).includes("departement")
										? item?.departement.nom + " " + item?.departement.code
										: ""}
									{Object.keys(item).includes("commune") ? item?.commune.nom + " " + item?.commune.code : ""}
								</p>
							</span>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Search;
