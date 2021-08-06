import React from "react";
import { useLocation } from "react-router-dom";
import NoResult from "../components/NoResult";
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
			{searchedResult.length !== 0 ? (
				<Videos
					data={searchedResult}
					header={`Search result for "${query.get("search")}"`}
				/>
			) : (
				<NoResult header={`Search result for "${query.get("search")}"`} />
			)}
		</div>
	);
};

export default SearchResult;
