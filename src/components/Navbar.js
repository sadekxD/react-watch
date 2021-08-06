import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
	Navbar,
	FlexboxGrid,
	Button,
	Icon,
	Form,
	IconButton,
	FormControl,
	Grid,
	Row,
	Col,
} from "rsuite";

import FilterDropdown from "./poppers/FilterPopper";

const NavbarC = () => {
	const [searchValue, setSearchValue] = useState({ search: "" });

	const history = useHistory();
	const location = useLocation();

	const handleSearch = (e) => {
		if (searchValue.search) {
			history.push({
				pathname: "/search",
				search: `?search=${searchValue.search}`,
			});
		}
	};

	return (
		<div
			className={`nav-container ${
				location.pathname.includes("videos") ? "hide-nav" : ""
			}`}
		>
			<Navbar className="nav">
				<Navbar.Body>
					<Grid fluid>
						<Row>
							<Col xs={24}>
								<FlexboxGrid align="middle">
									<FlexboxGrid.Item>
										<FlexboxGrid.Item className="search-form-md">
											<Form
												className="search-form"
												onChange={(val) => setSearchValue(val)}
												onSubmit={handleSearch}
											>
												<FlexboxGrid align="middle">
													<FlexboxGrid.Item>
														<FormControl
															placeholder="Search..."
															value={searchValue.search}
															name="search"
														/>
													</FlexboxGrid.Item>
													<FlexboxGrid.Item>
														<IconButton
															onClick={handleSearch}
															className="btn"
															appearance="ghost"
															icon={<Icon icon="search" />}
														/>
													</FlexboxGrid.Item>
												</FlexboxGrid>
											</Form>
										</FlexboxGrid.Item>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item style={{ flex: 1 }}>
										<FlexboxGrid className="nav-links" align="middle">
											<FlexboxGrid.Item>
												<FilterDropdown />
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/history">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon
															className="btn-icon"
															size="lg"
															icon="history"
														/>
														History
													</Button>
												</Link>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/saved">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon className="btn-icon" size="lg" icon="heart" />
														Saved
													</Button>
												</Link>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/upload">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon
															className="btn-icon"
															size="lg"
															icon="upload2"
														/>
														Upload
													</Button>
												</Link>
											</FlexboxGrid.Item>
										</FlexboxGrid>
									</FlexboxGrid.Item>
								</FlexboxGrid>
							</Col>
							<Col xs={24} className="search-form-sm">
								<Form
									className="search-form"
									onChange={(val) => setSearchValue(val)}
									onSubmit={handleSearch}
									fluid
								>
									<FlexboxGrid align="middle">
										<FlexboxGrid.Item style={{ flex: 1 }}>
											<FormControl
												placeholder="Search..."
												value={searchValue.search}
												name="search"
											/>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<IconButton
												className="btn"
												appearance="ghost"
												icon={<Icon icon="search" />}
											/>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</Form>
							</Col>
						</Row>
					</Grid>
				</Navbar.Body>
			</Navbar>
		</div>
	);
};

export default NavbarC;
