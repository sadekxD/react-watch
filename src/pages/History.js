import React from "react";
import HistoryList from "../components/history-list";

const History = () => {
	return (
		<div className="container history">
			<h5 className="history-header">History</h5>
			<HistoryList header="Today" />
			<HistoryList header="Yesterday" />
			<HistoryList header="This Week" />
		</div>
	);
};

export default History;
