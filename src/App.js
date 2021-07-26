import React from "react";

// Styles
import "rsuite/dist/styles/rsuite-default.css";
import "./styles/style.scss";

// Router
import { Route, Switch } from "react-router-dom";

// Pages and Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Upload from "./pages/Upload";
import Play from "./pages/Play";
import Test from "./pages/Test";
import SearchResult from "./pages/SearchResult";
import FilterResult from "./pages/FilterResult";

function App() {
	return (
		<div>
			<Header />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/test">
					<Test />
				</Route>
				<Route exact path="/videos/:id">
					<Play />
				</Route>
				<Route exact path="/saved">
					<Saved />
				</Route>
				<Route exact path="/search">
					<SearchResult />
				</Route>
				<Route exact path="/filter">
					<FilterResult />
				</Route>
				<Route exact path="/history">
					<History />
				</Route>
				<Route exact path="/upload">
					<Upload />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
