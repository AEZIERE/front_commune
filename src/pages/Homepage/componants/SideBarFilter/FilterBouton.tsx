import React from "react";
import { useAppDispatch } from "../../../../hook";
import { add } from "../../../../redux/filter/filter";

interface FilterBoutonProps {
	name: string;
}

const FilterBouton: React.FC<FilterBoutonProps> = ({ name }) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(add(name));
	};

	return (
		<button id={name} onClick={handleClick}>
			{name}
		</button>
	);
};

export default FilterBouton;
