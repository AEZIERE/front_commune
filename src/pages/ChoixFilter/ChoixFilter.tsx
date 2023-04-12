import React from "react";
import "./ChoixFilter.css";
import { enumNameTable, testEnum } from "../../api/utils";
import { userGetData } from "../../api/data";
import AssetFilter from "../../assets/AssetFilter";

const ChoixFilter = () => {
	return (
		<p>
			<AssetFilter />
		</p>
	);
};

export default ChoixFilter;
