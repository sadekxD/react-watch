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
						<Avatar
							src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
							size="sm"
							className="avatar"
						/>
						<strong>Katty Pumpkin</strong>
					</div>
					<p className="info-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt
					</p>
				</div>
			</div>
		</div>
	);
};

export default Story;
