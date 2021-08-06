import React from "react";

//Dummy Data
import { dummyData } from "../data/DummyData";

import Stories from "../components/Stories";
import Videos from "../components/video-list";

const Home = () => {
	return (
		<div>
			<Stories />
			<Videos header="Suggestions" data={dummyData} />
		</div>
	);
};

export default Home;
