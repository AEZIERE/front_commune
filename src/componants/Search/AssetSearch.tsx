import React, { useEffect } from "react";
import { userGetCommunes, userGetDepartements, userGetRegion } from "../../api/maille";
import { GetMailleBasic, GetMailleCommune, GetMailleDepartement } from "../../api/api.type";
import { useDebounce } from "react-use";
import "./AssetSearch.scss";

const AssetSearch = () => {
	const [state, setState] = React.useState("Typing stopped");
	const [val, setVal] = React.useState("");
	const [debouncedValue, setDebouncedValue] = React.useState("");

	//Cal API gouv for search
	const data_commun = userGetCommunes(debouncedValue);
	const data_departement = userGetDepartements(debouncedValue);
	const data_region = userGetRegion(debouncedValue);

	const className = `searchInput ${debouncedValue !== "" ? "active" : "inactive"}`;

	const [, cancel] = useDebounce(
		() => {
			setState("Typing stopped");
			setDebouncedValue(val);
		},
		1000,
		[val]
	);

	const trieData = () => {
		let data: any[] = [];
		let response: any[] = [];
		if (data_commun.data !== undefined) {
			data_commun.data.map((item) => {
				data.push(item);
			});
		}
		if (data.length < 5) {
			if (data_departement.data !== undefined) {
				data_departement.data.map((item) => {
					data.push(item);
				});
			}
		}
		if (data.length < 5) {
			if (data_region.data !== undefined) {
				data_region.data.map((item: any) => {
					data.push(item);
				});
			}
		}

		return data.slice(0, 5);
	};

	return (
		<div className={className}>
			<input
				type="search"
				value={val}
				placeholder="Saisir une adresse.."
				onChange={({ currentTarget }) => {
					setState("Waiting for typing to stop...");
					setVal(currentTarget.value);
				}}
			/>
			{debouncedValue !== "" && (
				<div className="suggestion">
					{trieData().map((item: any) => {
						return (
							<span key={item.code}>
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

export default AssetSearch;
