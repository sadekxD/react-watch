import React from "react";
import { useLocation } from "react-router-dom";
import NoResult from "../components/NoResult";

import Videos from "../components/video-list";
import { dummyData } from "../data/DummyData";

const FilterResult = () => {
	const location = useLocation();

	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();
	const upload_time = query.get("upload_time");
	const duration = query.get("duration");

	const upload_time_filter =
		upload_time === "Last hour"
			? 3600
			: upload_time === "Today"
			? 86400
			: upload_time === "This week"
			? 604800
			: upload_time === "This month"
			? 30 * 86400
			: upload_time === "This year"
			? 365 * 86400
			: 0;

	const duration_filter = (d) => {
		const in_duration =
			duration === "4 minutes"
				? d <= 240
				: duration === "4-20 minutes"
				? d <= 240 && d <= 1200
				: duration === "Over 20 minutes"
				? d > 1200
				: "";

		console.log(in_duration);

		return in_duration;
	};

	const filteredData = dummyData.filter((item) => {
		const diff_in_seconds =
			new Date().getTime() / 1000 - new Date(item.upload_date).getTime() / 1000;
		return (
			diff_in_seconds <= upload_time_filter || duration_filter(item.duration)
		);
	});

	return (
		<div>
			{filteredData.length !== 0 ? (
				<Videos data={filteredData} header="Filter result" />
			) : (
				<NoResult header="Filtered result" />
			)}
		</div>
	);
};

export default FilterResult;
