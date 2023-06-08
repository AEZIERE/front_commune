import React from "react";
import ReactEcharts from "echarts-for-react";
import CreateChart from "../../../../componants_main/Chart/createChart";

const getLevelOption = () => {
	return [
		{
			itemStyle: {
				borderWidth: 0,
				gapWidth: 5,
			},
		},
		{
			itemStyle: {
				gapWidth: 1,
			},
		},
		{
			colorSaturation: [0.35, 0.5],
			itemStyle: {
				gapWidth: 1,
				borderColorSaturation: 0.6,
			},
		},
	];
};

const data = [
	{
		name: "nodeA", // First tree
		value: 10,
		children: [
			{
				name: "nodeAa", // First leaf of first tree
				value: 4,
			},
			{
				name: "nodeAb", // Second leaf of first tree
				value: 6,
			},
		],
	},
	{
		name: "nodeB", // Second tree
		value: 20,
		children: [
			{
				name: "nodeBa", // Son of first tree
				value: 10,
				children: [
					{
						name: "nodeBa1", // Granson of first tree
						value: 5,
					},
					{
						name: "nodeBa1", // Granson of first tree
						value: 15,
					},
				],
			},
			{
				name: "nodeBa", // Son of first tree
				value: 10,
				children: [
					{
						name: "nodeBa1", // Granson of first tree
						value: 5,
					},
					{
						name: "nodeBa1", // Granson of first tree
						value: 15,
					},
				],
			},
		],
	},
];

const TreMap = () => {
	const option = {
		title: {
			text: "Disk Usage",
			left: "center",
		},
		series: [
			{
				name: "Disk Usage",
				type: "treemap",
				visibleMin: 300,
				label: {
					show: true,
					formatter: function (params) {
						console.log(params);

						return params.name + "\n" + params.value;
					},
				},
				itemStyle: {
					borderColor: "#fff",
				},
				levels: getLevelOption(),
				data: data,
			},
		],
	};

	return (
		<div>
			<ReactEcharts option={option} />
		</div>
	);
};

export default TreMap;
