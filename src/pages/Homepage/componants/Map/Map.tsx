import React, { useEffect, useState } from "react";
import L, { map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAppDispatch, useAppSelector } from "../../../../hook";

const drawMap = (map: L.Map) => {
	// draw polygon
	const polygon = L.polygon([
		[45.7128, 0.006],
		[44.7128, 0.006],
		[43.7128, 2.006],
		[42.7128, 3.006],
		[41.7128, 10.006],
		[45.7128, 0.006],
	])
		.bindPopup("Hello World!")
		.openPopup();

	// event listener on polygon
	polygon.addEventListener("click", () => {
		console.log("polygon clicked");
	});

	// add polygon to map
	polygon.addTo(map);
};

const Map = () => {
	const mailleSelect = useAppSelector((state) => state.mailleSelect.value);

	useEffect(() => {
		const map = L.map("map").setView([20.335, 2.43], 6);
		map.attributionControl.setPrefix(false);
		map.zoomControl.remove();

		map.panTo(L.latLng(45.7128, 0.006));

		// Ajouter une couche de tuile (par exemple, OpenStreetMap)
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

		// Ajouter un marqueur à la position spécifiée
		L.marker([47.335, 2.43])
			.addTo(map)
			.bindPopup("Hello World!")
			.openPopup()
			.addEventListener("click", () => {
				drawMap(map);
			});
	}, []);

	return <div id="map"></div>;
};

export default Map;
