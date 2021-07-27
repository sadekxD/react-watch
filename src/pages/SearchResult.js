import React from "react";
import { useLocation } from "react-router-dom";
import Videos from "../components/video-list";
import { dummyData } from "../data/DummyData";

const SearchResult = () => {
	const location = useLocation();
	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();

	const searchedResult = dummyData.filter(
		(item) =>
			item.title.toLowerCase().search(query.get("search").toLowerCase()) !== -1
	);

	return (
		<div>
			<Videos
				data={searchedResult}
				header={`Search result for "${query.get("search")}"`}
			/>
		</div>
	);
};

export default SearchResult;
