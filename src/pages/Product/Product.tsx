import React from "react";
import "./Product.scss";
import TreeMap from "./componants/TreeMap/Treemap_chartjs";

const Product = () => {
	return (
		<div id="product">
			<div id="navBar">navBar</div>
			<div id="content">
				<TreeMap />
			</div>
			<div id="footBar">footBar</div>
		</div>
	);
};

export default Product;
