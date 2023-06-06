import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";

const data = {
	name: "nivo",
	color: "hsl(10, 70%, 50%)",
	children: [
		{
			name: "viz",
			color: "hsl(185, 70%, 50%)",
			children: [
				{
					name: "stack",
					color: "hsl(170, 70%, 50%)",
					children: [
						{
							name: "cchart",
							color: "hsl(199, 70%, 50%)",
							loc: 49406,
						},
						{
							name: "xAxis",
							color: "hsl(356, 70%, 50%)",
							loc: 60568,
						},
						{
							name: "yAxis",
							color: "hsl(157, 70%, 50%)",
							loc: 194673,
						},
						{
							name: "layers",
							color: "hsl(202, 70%, 50%)",
							loc: 85251,
						},
					],
				},
				{
					name: "ppie",
					color: "hsl(88, 70%, 50%)",
					children: [
						{
							name: "chart",
							color: "hsl(193, 70%, 50%)",
							children: [
								{
									name: "pie",
									color: "hsl(98, 70%, 50%)",
									children: [
										{
											name: "outline",
											color: "hsl(188, 70%, 50%)",
											loc: 163582,
										},
										{
											name: "slices",
											color: "hsl(277, 70%, 50%)",
											loc: 16718,
										},
										{
											name: "bbox",
											color: "hsl(143, 70%, 50%)",
											loc: 28609,
										},
									],
								},
								{
									name: "donut",
									color: "hsl(229, 70%, 50%)",
									loc: 90055,
								},
								{
									name: "gauge",
									color: "hsl(78, 70%, 50%)",
									loc: 81270,
								},
							],
						},
						{
							name: "legends",
							color: "hsl(253, 70%, 50%)",
							loc: 97987,
						},
					],
				},
			],
		},
		{
			name: "colors",
			color: "hsl(214, 70%, 50%)",
			children: [
				{
					name: "rgb",
					color: "hsl(79, 70%, 50%)",
					loc: 194896,
				},
				{
					name: "hsl",
					color: "hsl(197, 70%, 50%)",
					loc: 177895,
				},
			],
		},
		{
			name: "utils",
			color: "hsl(152, 70%, 50%)",
			children: [
				{
					name: "randomize",
					color: "hsl(212, 70%, 50%)",
					loc: 121272,
				},
				{
					name: "resetClock",
					color: "hsl(31, 70%, 50%)",
					loc: 58104,
				},
				{
					name: "noop",
					color: "hsl(269, 70%, 50%)",
					loc: 104678,
				},
				{
					name: "tick",
					color: "hsl(6, 70%, 50%)",
					loc: 120277,
				},
				{
					name: "forceGC",
					color: "hsl(334, 70%, 50%)",
					loc: 187073,
				},
				{
					name: "stackTrace",
					color: "hsl(240, 70%, 50%)",
					loc: 51092,
				},
				{
					name: "dbg",
					color: "hsl(203, 70%, 50%)",
					loc: 199416,
				},
			],
		},
		{
			name: "generators",
			color: "hsl(325, 70%, 50%)",
			children: [
				{
					name: "address",
					color: "hsl(252, 70%, 50%)",
					loc: 5340,
				},
				{
					name: "city",
					color: "hsl(74, 70%, 50%)",
					loc: 188948,
				},
				{
					name: "animal",
					color: "hsl(336, 70%, 50%)",
					loc: 136293,
				},
				{
					name: "movie",
					color: "hsl(287, 70%, 50%)",
					loc: 27131,
				},
				{
					name: "user",
					color: "hsl(237, 70%, 50%)",
					loc: 89998,
				},
			],
		},
		{
			name: "set",
			color: "hsl(66, 70%, 50%)",
			children: [
				{
					name: "clone",
					color: "hsl(182, 70%, 50%)",
					loc: 192353,
				},
				{
					name: "intersect",
					color: "hsl(358, 70%, 50%)",
					loc: 104782,
				},
				{
					name: "merge",
					color: "hsl(307, 70%, 50%)",
					loc: 74343,
				},
				{
					name: "reverse",
					color: "hsl(190, 70%, 50%)",
					loc: 144439,
				},
				{
					name: "toArray",
					color: "hsl(327, 70%, 50%)",
					loc: 46897,
				},
				{
					name: "toObject",
					color: "hsl(93, 70%, 50%)",
					loc: 29103,
				},
				{
					name: "fromCSV",
					color: "hsl(77, 70%, 50%)",
					loc: 199731,
				},
				{
					name: "slice",
					color: "hsl(330, 70%, 50%)",
					loc: 95392,
				},
				{
					name: "append",
					color: "hsl(91, 70%, 50%)",
					loc: 86648,
				},
				{
					name: "prepend",
					color: "hsl(340, 70%, 50%)",
					loc: 136166,
				},
				{
					name: "shuffle",
					color: "hsl(324, 70%, 50%)",
					loc: 27873,
				},
				{
					name: "pick",
					color: "hsl(311, 70%, 50%)",
					loc: 26283,
				},
				{
					name: "plouc",
					color: "hsl(136, 70%, 50%)",
					loc: 187494,
				},
			],
		},
		{
			name: "text",
			color: "hsl(299, 70%, 50%)",
			children: [
				{
					name: "trim",
					color: "hsl(252, 70%, 50%)",
					loc: 160742,
				},
				{
					name: "slugify",
					color: "hsl(346, 70%, 50%)",
					loc: 59698,
				},
				{
					name: "snakeCase",
					color: "hsl(288, 70%, 50%)",
					loc: 36053,
				},
				{
					name: "camelCase",
					color: "hsl(219, 70%, 50%)",
					loc: 178680,
				},
				{
					name: "repeat",
					color: "hsl(216, 70%, 50%)",
					loc: 49647,
				},
				{
					name: "padLeft",
					color: "hsl(242, 70%, 50%)",
					loc: 56521,
				},
				{
					name: "padRight",
					color: "hsl(330, 70%, 50%)",
					loc: 185952,
				},
				{
					name: "sanitize",
					color: "hsl(255, 70%, 50%)",
					loc: 198917,
				},
				{
					name: "ploucify",
					color: "hsl(236, 70%, 50%)",
					loc: 76634,
				},
			],
		},
		{
			name: "misc",
			color: "hsl(325, 70%, 50%)",
			children: [
				{
					name: "greetings",
					color: "hsl(77, 70%, 50%)",
					children: [
						{
							name: "hey",
							color: "hsl(223, 70%, 50%)",
							loc: 82546,
						},
						{
							name: "HOWDY",
							color: "hsl(88, 70%, 50%)",
							loc: 114910,
						},
						{
							name: "aloha",
							color: "hsl(322, 70%, 50%)",
							loc: 93320,
						},
						{
							name: "AHOY",
							color: "hsl(216, 70%, 50%)",
							loc: 31853,
						},
					],
				},
				{
					name: "other",
					color: "hsl(63, 70%, 50%)",
					loc: 87963,
				},
				{
					name: "path",
					color: "hsl(41, 70%, 50%)",
					children: [
						{
							name: "pathA",
							color: "hsl(234, 70%, 50%)",
							loc: 174746,
						},
						{
							name: "pathB",
							color: "hsl(32, 70%, 50%)",
							children: [
								{
									name: "pathB1",
									color: "hsl(65, 70%, 50%)",
									loc: 47633,
								},
								{
									name: "pathB2",
									color: "hsl(308, 70%, 50%)",
									loc: 29667,
								},
								{
									name: "pathB3",
									color: "hsl(258, 70%, 50%)",
									loc: 106665,
								},
								{
									name: "pathB4",
									color: "hsl(301, 70%, 50%)",
									loc: 101095,
								},
							],
						},
						{
							name: "pathC",
							color: "hsl(174, 70%, 50%)",
							children: [
								{
									name: "pathC1",
									color: "hsl(22, 70%, 50%)",
									loc: 30628,
								},
								{
									name: "pathC2",
									color: "hsl(129, 70%, 50%)",
									loc: 181952,
								},
								{
									name: "pathC3",
									color: "hsl(96, 70%, 50%)",
									loc: 166305,
								},
								{
									name: "pathC4",
									color: "hsl(263, 70%, 50%)",
									loc: 73214,
								},
								{
									name: "pathC5",
									color: "hsl(359, 70%, 50%)",
									loc: 133647,
								},
								{
									name: "pathC6",
									color: "hsl(169, 70%, 50%)",
									loc: 11281,
								},
								{
									name: "pathC7",
									color: "hsl(181, 70%, 50%)",
									loc: 117993,
								},
								{
									name: "pathC8",
									color: "hsl(316, 70%, 50%)",
									loc: 176829,
								},
								{
									name: "pathC9",
									color: "hsl(326, 70%, 50%)",
									loc: 37005,
								},
							],
						},
					],
				},
			],
		},
	],
};

const TreeMap = () => {
	return (
		<div>
			<ResponsiveTreeMap
				data={data}
				identity="name"
				value="loc"
				valueFormat=".02s"
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				labelSkipSize={12}
				labelTextColor={{
					from: "color",
					modifiers: [["darker", 1.2]],
				}}
				parentLabelPosition="left"
				parentLabelTextColor={{
					from: "color",
					modifiers: [["darker", 2]],
				}}
				borderColor={{
					from: "color",
					modifiers: [["darker", 0.1]],
				}}
			/>
		</div>
	);
};

export default TreeMap;
