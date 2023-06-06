import React from "react";
import ReactEcharts from "echarts-for-react";

const getLevelOption = () => {
	return [
		{
			itemStyle: {
				borderColor: "#777",
				borderWidth: 0,
				gapWidth: 1,
			},
			upperLabel: {
				show: false,
			},
		},
		{
			itemStyle: {
				borderColor: "#555",
				borderWidth: 5,
				gapWidth: 1,
			},
			emphasis: {
				itemStyle: {
					borderColor: "#ddd",
				},
			},
		},
		{
			colorSaturation: [0.35, 0.5],
			itemStyle: {
				borderWidth: 5,
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
		tooltip: {
			formatter: function (info) {
				var value = info.value;
				var treePathInfo = info.treePathInfo;
				var treePath = [];
				for (var i = 1; i < treePathInfo.length; i++) {
					treePath.push(treePathInfo[i].name);
				}
				return [
					'<div class="tooltip-title">' + echarts.format.encodeHTML(treePath.join("/")) + "</div>",
					"Disk Usage: " + echarts.format.addCommas(value) + " KB",
				].join("");
			},
		},
		series: [
			{
				name: "Test",
				type: "treemap",
				visibleMin: 300,
				label: {
					show: true,
					formatter: "{b}",
				},
				upperLabel: {
					show: true,
					height: 30,
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
