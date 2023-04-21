import React from "react";
import { add, remove_one_last, remove_all_last } from "../../../redux/road/road";
import { useAppDispatch, useAppSelector } from "../../../hook";
const Road = () => {
	const list = useAppSelector((state) => state.road.value);
	const dispatch = useAppDispatch();

	const handleClick = (item: string) => {
		dispatch(remove_all_last(item));
	};
	return (
		<div id="road">
			{list.map((item) => (
				<span onClick={() => handleClick(item)}> - {item}</span>
			))}
		</div>
	);
};

export default Road;
