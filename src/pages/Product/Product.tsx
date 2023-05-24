import React from "react";
import "./Product.scss";
import Schema from "./componants/Schema/Schema";

const Product = () => {
	return (
		<div id="product">
			<div id="navBar">navBar</div>
			<div id="content">
				<Schema />
			</div>
			<div id="footBar">footBar</div>
		</div>
	);
};

export default Product;
