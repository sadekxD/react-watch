import React from "react";
import Story from "./cards/Story";

const Stories = () => {
	return (
		<div className="container story-container">
			<div className="stories-wrapper">
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</div>
		</div>
	);
};

export default Stories;
