import React from "react";
import { Link } from "react-router-dom";

// Utils
import { calculateDate } from "../../utils/uploadTimeCalculate";

const Video2 = ({ id, title, thumbnail, duration, upload_date }) => {
	const getTime = (time = 0) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	return (
		<div className="video-card-2">
			<Link to={`/videos/${id}`}>
				<div className="video-wrapper">
					<div className="img-wrapper">
						<img className="video-img" src={thumbnail} alt="random" />
						<span className="duration">{getTime(duration)}</span>
					</div>
					<div className="video-info">
						<h1 className="video-title">{title}</h1>
						<h4 className="author">Robert Downy Jr.</h4>
						<div>
							<span className="views">5k Views</span>
							<span className="timesince">
								{calculateDate(new Date(upload_date), new Date())}
							</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Video2;
