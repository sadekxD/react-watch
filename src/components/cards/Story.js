import React from "react";
import { Avatar } from "rsuite";

const Story = () => {
	return (
		<div className="story">
			<div className="story-wrapper">
				<img
					src="https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg"
					alt="story"
					className="story-img"
				/>
				<div className="story-info">
					<div className="author-info">
						<Avatar />
						<strong>Katty Pumpkin</strong>
					</div>
					<p className="info-text"></p>
				</div>
			</div>
		</div>
	);
};

export default Story;
