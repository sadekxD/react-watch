import React from "react";
import Stories from "../components/Stories";
import Videos from "../components/video-list";

const Home = () => {
	return (
		<div>
			<Stories />
			<Videos header="Suggestions" />
		</div>
	);
};

export default Home;
