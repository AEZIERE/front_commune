import React, { useMemo, useState } from "react";
import { GetShape } from "../../../../api/api.type";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { Polygon, LayerGroup } from "react-leaflet";
import { usePostData } from "../../../../api/data";

const defautColor = { color: "#002049", fillColor: "white", weight: 1, fillOpacity: 0.3 };

const Zone = ({ zone }: { zone: GetShape }) => {
	const dispatch = useAppDispatch();
	const [zoneMouveHover, setZoneMouveHover] = useState(false);
	const [zoneMouveClick, setZoneMouveClick] = useState(false);
	const { value } = useAppSelector((state) => state.filter);
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);

	const [optionColor, setOptionColor] = useState(defautColor);

	const onZoneClick = () => {
		dispatch({ type: "mapState/setSelectedZone", payload: { name: zone.libelle, code: zone.code, level: zone.level } });
	};
	const eventHandlers = useMemo(
		() => ({
			click() {
				if (zone.code != "") {
					onZoneClick();
				}
			},
			mouseover() {
				handleMouseOver();
				setOptionColor({ color: "#002049", fillColor: "#f6b26b", weight: 1, fillOpacity: 0.3 });
			},
			mouseout() {
				handleMouseOut();
				setOptionColor({ color: "#002049", fillColor: "white", weight: 1, fillOpacity: 0.3 });
			},
		}),
		[zoneMouveClick]
	);

	const handleMouseOver = () => {
		setZoneMouveHover(true);
	};

	const handleMouseOut = () => {
		setZoneMouveHover(false);
	};

	return (
		<LayerGroup key={zone.code}>
			<Polygon
				positions={zone.shape}
				eventHandlers={eventHandlers}
				attribution={zone.code}
				weight={zoneMouveClick ? 30 : 1}
				pathOptions={
					zoneMouveClick
						? {
								color: "blue",
								fillColor: "white",
								weight: 3,
								fillOpacity: 0.8,
						  }
						: optionColor
				}
			/>
		</LayerGroup>
	);
};

export default Zone;
