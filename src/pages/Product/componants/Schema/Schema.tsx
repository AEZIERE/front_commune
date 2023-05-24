import React, { useEffect } from "react";
import MySvg from "./my-svg-file.svg";

import createEngine, { DefaultLinkModel, DefaultNodeModel, DiagramModel } from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

const Schema = () => {
	const [couches, setCouches] = React.useState([{ name: "couche1" }, { name: "couche2" }, { name: "couche3" }]);

	const engine = createEngine();

	// node 1
	const node1 = new DefaultNodeModel({
		name: "Node 1",
		color: "rgb(0,192,255)",
	});
	node1.setPosition(100, 100);
	let port1 = node1.addOutPort("Out");

	// node 2
	const node2 = new DefaultNodeModel({
		name: "Node 1",
		color: "rgb(0,192,255)",
	});
	node2.setPosition(200, 100);
	let port2 = node2.addOutPort("Out");

	const node3 = new DefaultNodeModel({
		name: "Node 1",
		color: "rgb(0,192,255)",
	});
	node3.setPosition(300, 100);
	let port3 = node3.addOutPort("Out");

	// link them and add a label to the link
	const link = port1.link<DefaultLinkModel>(port2);
	link.addLabel("Hello World!");

	const model = new DiagramModel();
	model.addAll(node1, node2, link, node3);
	engine.setModel(model);

	return (
		<div>
			<CanvasWidget engine={engine} />
		</div>
	);
};

export default Schema;
