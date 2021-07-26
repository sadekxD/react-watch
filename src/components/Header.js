import React from "react";
import { Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import Logo from "../media/Logo.png";

const Header = () => {
	return (
		<FlexboxGrid
			justify="center"
			align="middle"
			style={{ height: 100, backgroundColor: "#ffffff" }}
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
