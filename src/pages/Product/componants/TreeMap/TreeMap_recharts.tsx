import React from "react";

const data = [
	{
		name: "axis",
		color: "#468df3",
		children: [
			{ name: "Axes", size: 1302 },
			{ name: "Axis", size: 24593 },
			{ name: "AxisGridLine", size: 652 },
			{ name: "AxisLabel", size: 636 },
			{ name: "CartesianAxes", size: 6703 },
		],
	},
	{
		name: "controls",
		children: [
			{ name: "AnchorControl", size: 2138 },
			{ name: "ClickControl", size: 3824 },
			{ name: "Control", size: 1353 },
			{ name: "ControlList", size: 4665 },
			{ name: "DragControl", size: 2649 },
			{ name: "ExpandControl", size: 2832 },
			{ name: "HoverControl", size: 4896 },
			{ name: "IControl", size: 763 },
			{ name: "PanZoomControl", size: 5222 },
			{ name: "SelectionControl", size: 7862 },
			{ name: "TooltipControl", size: 8435 },
		],
	},
	{
		name: "data",
		children: [
			{ name: "Data", size: 20544 },
			{ name: "DataList", size: 19788 },
			{ name: "DataSprite", size: 10349 },
			{ name: "EdgeSprite", size: 3301 },
			{ name: "NodeSprite", size: 19382 },
			{
				name: "render",
				children: [
					{ name: "ArrowType", size: 698 },
					{ name: "EdgeRenderer", size: 5569 },
					{ name: "IRenderer", size: 353 },
					{ name: "ShapeRenderer", size: 2247 },
				],
			},
			{ name: "ScaleBinding", size: 11275 },
			{ name: "Tree", size: 7147 },
			{ name: "TreeBuilder", size: 9930 },
		],
	},
];

import { PureComponent } from "react";
import { Treemap, ResponsiveContainer } from "recharts";

const MyTreeMap = () => {
	return (
		<div>
			<ResponsiveContainer width="100%" height="100%">
				<Treemap width={400} height={200} data={data} dataKey="size" stroke="#fff" fill="#8884d8" />
			</ResponsiveContainer>
		</div>
	);
};

export default MyTreeMap;
