import React from "react";

const NoResult = ({ header }) => {
	return (
		<div>
			<div className="container no-result-container">
				<h5 className="header">{header}</h5>

				<div className="no-result" style={{ height: 50, textAlign: "center" }}>
					No result
				</div>
			</div>
		</div>
	);
};

export default NoResult;
