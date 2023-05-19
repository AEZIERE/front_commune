import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useGetCommuneOfDepartement, useGetCommuneOfRegion, useGetDepartementsOfRegion } from "../../../../api/maille";
import BarChart from "../../../../componants_main/Chart/createChart";

const SideBarInfo = () => {
	const mailleSelect = useAppSelector((state) => state.mailleSelect.value);

	const dispatch = useAppDispatch();

	const [communes, setCommunes] = useState<object[]>([]);

	return (
		<div id="sideBarRight">
			<BarChart typeChart={"pie"} />
			<BarChart typeChart={"bar"} />
		</div>
	);
};

export default SideBarInfo;
