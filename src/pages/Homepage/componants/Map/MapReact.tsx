import React, { Ref, useCallback, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, LayerGroup, Circle, Polygon } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { ControleMaille, GetShape } from "../../../../api/api.type";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useGetInferiorShapes, useGetShape } from "../../../../api/maillage";
import { getMailleInf } from "../../../../Utils/utilMaille";
import Zone from "./Zone";

const MapReact = () => {
	const [zoneToDisplay, setZoneToDisplay] = useState<GetShape[] | undefined>([]);
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState<LatLngExpression>();
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	const dispatch = useAppDispatch();

	const setZoom = (level: ControleMaille) => {
		if (level === ControleMaille.nation) {
			return 6;
		}
		if (level === ControleMaille.region) {
			return 8;
		}
		if (level === ControleMaille.departement) {
			return 8;
		}
		if (level === ControleMaille.commune) {
			return 10;
		}
		if (level === ControleMaille.epci) {
			return 9;
		}
		return 6;
	};

	// this API is used to get shapes if we are at nation scale
	const { data: ShapeNation } = useGetShape({
		maille: ControleMaille.region,
		code: "",
		isEnabled: currentZone.level === ControleMaille.nation,
	});

	const { data: ShapesExt } = useGetShape({
		maille: currentZone.level,
		code: currentZone.code,
		isEnabled: currentZone.level !== ControleMaille.nation,
	});
	const { data: ShapesIn } = useGetInferiorShapes({
		maille_source: currentZone.level,
		code: currentZone.code,
		maille_cible: getMailleInf(currentZone.level),
		isEnabled: currentZone.level !== ControleMaille.departement && currentZone.level !== ControleMaille.nation,
	});

	useEffect(() => {
		if (currentZone.level === ControleMaille.nation) {
			//add attribute level maille to the shapes
			ShapeNation?.forEach((shape) => {
				shape.level = ControleMaille.region;
			});
			setZoneToDisplay(ShapeNation);
			if (map !== null) map.setView([47, 7], 6);
		}
		if (currentZone.level !== ControleMaille.nation) {
			if (ShapesIn || ShapesExt) setZoneToDisplay([]);
			ShapesIn?.forEach((shape) => {
				shape.level = getMailleInf(currentZone.level);
			});

			if (currentZone.level === ControleMaille.departement) {
				setZoneToDisplay(ShapesExt);
			} else {
				setZoneToDisplay(ShapesIn);
			}
			if (ShapesExt && map !== null) {
				map.setView([ShapesExt[0].centre[0][0], ShapesExt[0].centre[0][1] + 1], setZoom(currentZone.level));
			}
			dispatch({ type: "mapState/setSelectedZone", payload: { name: "", code: "", level: "" } });
		}
	}, [ShapeNation, ShapesIn, ShapesExt, currentZone]);

	return (
		<div id="map">
			<MapContainer
				center={[47, 8]}
				zoom={setZoom(currentZone.level)}
				zoomSnap={0.1}
				scrollWheelZoom={true}
				doubleClickZoom={false}
				attributionControl={false}
				zoomControl={false}
				ref={setMap}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
					url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
				/>
				<LayerGroup>
					{zoneToDisplay?.map((zone) => {
						if (zone) {
							return <Zone key={zone.code} zone={zone} />;
						}
					})}
				</LayerGroup>
			</MapContainer>
		</div>
	);
};

export default MapReact;
