import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import Logo from "../media/Logo.png";

const Header = () => {
	const location = useHistory();
	return (
		<FlexboxGrid
			justify="center"
			align="middle"
			className={`header ${
				location.pathname.includes("videos") ? "hide-header" : ""
			}`}
		>
			<FlexboxGrid.Item>
				<Link to="/">
					<img src={Logo} style={{ height: 60 }} alt="logo" />
				</Link>
			</FlexboxGrid.Item>
		</FlexboxGrid>
	);
};

export default Header;
