import React from "react";
import { useLocation } from "react-router-dom";
import Videos from "../components/video-list";

const SearchResult = () => {
	const location = useLocation();
	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();

	return (
		<div>
			<Videos header={`Search result for "${query.get("search")}"`} />
		</div>
	);
};

export default SearchResult;
