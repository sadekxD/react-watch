import React from "react";
import Videos from "../components/video-list";
import { dummyData } from "../data/DummyData";

const Saved = () => {
	return (
		<div>
			<Videos data={dummyData} header="Saved Videos" />
		</div>
	);
};

export default Saved;
