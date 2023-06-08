import React, { useEffect, useRef, useState } from "react";
import Chart, { ChartItem, ChartTypeRegistry } from "chart.js/auto";
import { useAppDispatch, useAppSelector } from "../../hook";

const createChart: React.FC<{
	typeChart: keyof ChartTypeRegistry;
	data: { title: string; value: any; names: [string] };
}> = (props) => {
	const chartRef = useRef<ChartItem | null>(null);

	const valueFilter = useAppSelector((state) => state.filter.value);
	const { selectedZone, currentZone } = useAppSelector((state) => state.mapState);

	const [valueDisplay, setValueDisplay] = useState<[]>([]);
	const [list_label, setList_label] = useState<[]>([]);

	const dispatch = useAppDispatch();

	const [chart, setChart] = useState<Chart>();

	useEffect(() => {
		if (!props.data) return;
		const tab = [];
		props.data.names.forEach((element) => {
			if (props.data.value === undefined) return;
			tab.push(props.data.value[element]);
		});
		setValueDisplay(tab);
	}, [props.data, valueFilter]);

	useEffect(() => {
		if (!props.data) return;
		setList_label(
			props.data.names.map((item: string) => {
				if (item.length > 20) return item.slice(0, 10) + "...";
				else return item;
			}) ?? []
		);
	}, [props.data, valueFilter]);

	useEffect(() => {
		if (chart) chart.destroy();
		if (!chartRef || !props.data) return;
		if (chartRef.current) {
			const chartInstance = new Chart(chartRef.current, {
				type: props.typeChart,
				data: {
					labels: list_label,
					datasets: [
						{
							label: props.data.title,
							data: valueDisplay,
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
	}, [valueFilter, list_label]);

	return (
		<div>
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default createChart;
