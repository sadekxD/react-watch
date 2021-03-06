import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "rsuite";

const QualityTooltip = ({
	children,
	resolution,
	setResolution,
	resolutions,
}) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (active) {
			setTimeout(() => {
				setActive(false);
			}, 2000);
		}
	}, [active]);

	const handleResolution = (value) => {
		setResolution(value);
	};

	return (
		<div className="quality-tooltip" onClick={() => setActive(true)}>
			{active && (
				<div
					className="radio-group"
					onMouseOver={() => setActive(true)}
					onMouseLeave={() => setActive(false)}
					style={{
						background: "#fff",
						color: "#000",
						fontSize: 10,
						padding: "10px 12px",
						borderRadius: 4,
					}}
				>
					<RadioGroup
						onChange={handleResolution}
						value={resolution}
						name="radioList"
						appearance="picker"
					>
						{resolutions.map((res) => (
							<Radio key={res} value={res}>
								{res}
							</Radio>
						))}
					</RadioGroup>
				</div>
			)}
			<div>{children}</div>
		</div>
	);
};

export default QualityTooltip;
