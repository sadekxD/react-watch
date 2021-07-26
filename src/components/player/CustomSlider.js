import React from "react";

const CustomSlider = ({ min, max, step = 0, value, onChange, style }) => {
	return (
		<div className="slider" style={style}>
			<input
				id="custom-slider"
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				step={step}
			/>
		</div>
	);
};

export default CustomSlider;
