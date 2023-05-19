import React, { useEffect, useRef, useState } from "react";
import Chart, { ChartItem, ChartTypeRegistry } from "chart.js/auto";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useGetCommuneOfDepartement, useGetCommuneOfRegion, useGetDepartementsOfRegion } from "../../api/maille";
import { circle } from "leaflet";

const createChart: React.FC<{ typeChart: keyof ChartTypeRegistry }> = (props) => {
	const chartRef = useRef<ChartItem | null>(null);

	const valueFilter = useAppSelector((state) => state.filter.value);
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);
	
	const dispatch = useAppDispatch();

	const [chart, setChart] = useState<Chart>();

	useEffect(() => {
		if (chart) chart.destroy();
		if (!chartRef) return;
		if (chartRef.current) {
			const chartInstance = new Chart(chartRef.current, {
				type: props.typeChart,
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of Votes",
							data: [12, 19, 3, 5, 2, 3],
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
			setChart(chartInstance);
		}
	}, [valueFilter]);

	return (
		<div>
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default createChart;
