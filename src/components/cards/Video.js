import React from "react";
import { Icon, Avatar } from "rsuite";
import { Link } from "react-router-dom";
import { formatDistance, subDays } from "date-fns";

// Utils
import { calculateDate } from "../../utils/uploadTimeCalculate";

import play from "../../media/play-icon.svg";

const Video = ({ id, title, thumbnail, duration, upload_date }) => {
	const getTime = (time = 0) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	return (
		<div className="video-card">
			<Link to={`/videos/${id}`}>
				<div className="wrapper">
					<div className="video-img-wrapper">
						<img className="video-img" src={thumbnail} alt={title} />
						<span className="icon-wrapper">
							<img src={play} alt="icon" />
						</span>
						<span className="duration">{getTime(duration)}</span>
						<div className="video-info">
							<div className="user-info">
								<Avatar
									circle
									src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
									size="xs"
									style={{ marginRight: 4 }}
								>
									RS
								</Avatar>
								<p>John Doe</p>
							</div>
							<div className="views">
								<Icon icon="eye" style={{ marginRight: 4 }} />
								33k
							</div>
						</div>
					</div>
					<p className="video-title">{title}</p>
					<div className="time-stamp">
						{calculateDate(new Date(upload_date), new Date())}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Video;
