import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useGetMaillesLevels } from "../../../api/maillage";
const Road = () => {
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const dispatch = useAppDispatch();

	const [list, setList] = React.useState<{ name: string; code: string; level: string }[]>([]);

	const infoMailles = useGetMaillesLevels({
		maille: currentZone.level,
		code: currentZone.code,
		isEnabled: true,
	});
	useEffect(() => {
		if (!infoMailles) return;
		setList([...list, { name: "France", code: "", level: "nation" }]);
	}, []);

	const handleClick = (item) => {
		console.log(item);
	};
	return (
		<div id="road">
			{list.map((item) => (
				<span>
					{">"} {item.name} {item.code} {item.level}
				</span>
			))}
		</div>
	);
};

export default Road;
