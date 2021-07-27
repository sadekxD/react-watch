import React, { useState } from "react";
import { useHistory } from "react-router";
import {
	Whisper,
	Popover,
	Button,
	RadioGroup,
	Radio,
	Icon,
	Grid,
	Row,
	Col,
} from "rsuite";

const up_times = ["Last hour", "Today", "This week", "This month", "This year"];
const durations = ["4 minutes", "4-20 minutes", "Over 20 minutes"];

const FilterPopper = ({ ...rest }) => {
	const [filterValue, setFilterValue] = useState({
		upload_time: "",
		duration: "",
	});
	const history = useHistory();

	const handleFilter = () => {
		history.push({
			pathname: "/filter",
			search: `?upload_time=${filterValue.upload_time}&duration=${filterValue.duration}`,
		});
	};

	return (
		<Popover {...rest} full>
			<div className="filter-popper">
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<RadioGroup
								name="radioList"
								appearance="picker"
								defaultValue="A"
								onChange={(value) =>
									setFilterValue({ ...filterValue, upload_time: value })
								}
							>
								<span style={styles.radioGroupLabel}>Upload Date: </span>
								{up_times.map((time) => (
									<Radio key={time} value={time}>
										{time}
									</Radio>
								))}
							</RadioGroup>
						</Col>
						<Col xs={12}>
							<RadioGroup
								name="radioList"
								appearance="picker"
								defaultValue="A"
								onChange={(value) =>
									setFilterValue({ ...filterValue, duration: value })
								}
							>
								<span style={styles.radioGroupLabel}>Duration: </span>
								{durations.map((time) => (
									<Radio key={time} value={time}>
										{time}
									</Radio>
								))}
							</RadioGroup>
						</Col>
					</Row>
				</Grid>

				<Button
					onClick={handleFilter}
					className="filter-btn"
					appearance="ghost"
				>
					<Icon className="filter-icon" icon="filter" appearance="ghost" />
					Filter
				</Button>
			</div>
		</Popover>
	);
};

const FilterDropdown = () => {
	const triggerRef = React.createRef();

	return (
		<Whisper
			placement="bottomStart"
			trigger="click"
			triggerRef={triggerRef}
			speaker={<FilterPopper />}
			enterable
		>
			<Button className="btn" size="xs" appearance="ghost">
				<Icon className="btn-icon" size="lg" icon="filter" />
				Filter
			</Button>
		</Whisper>
	);
};

export default FilterDropdown;

const styles = {
	radioGroupLabel: {
		padding: "8px 2px 8px 10px",
		display: "inline-block",
		verticalAlign: "middle",
	},
};
