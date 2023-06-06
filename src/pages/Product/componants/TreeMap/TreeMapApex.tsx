import React from "react";
import Chart from "react-apexcharts";

const TreeMapExample = () => {
	const data = {
		series: [
			{
				name: "Desktops",
				data: [
					{
						x: "ABC",
						y: 10,
					},
					{
						x: "DEF",
						y: 60,
					},
					{
						x: "XYZ",
						y: 41,
					},
				],
			},
			{
				name: "Mobile",
				data: [
					{
						x: "ABCD",
						y: 10,
					},
					{
						x: "DEFG",
						y: 20,
					},
					{
						x: "WXYZ",
						y: 51,
					},
					{
						x: "PQR",
						y: 30,
					},
					{
						x: "MNO",
						y: 20,
					},
					{
						x: "CDE",
						y: 30,
					},
				],
			},
		],
	};
	const options = {
		legend: {
			show: false,
		},
		menu: {
			show: false,
		},

		title: {
			text: "Treemap Chart",
		},
	};

	return (
		<div>
			<Chart options={options} series={data.series} type="treemap" height={350} />
		</div>
	);
};

export default TreeMapExample;
