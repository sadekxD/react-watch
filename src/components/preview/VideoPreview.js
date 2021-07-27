import React from "react";
import play from "../../media/play.png";

const defaultThumbnail =
	"https://media.istockphoto.com/vectors/no-thumbnail-image-vector-graphic-vector-id1147544806?k=6&m=1147544806&s=170667a&w=0&h=lYslyr1iPYlaJMp372lvw521YZY-d-z9WBAkQHhLAjc=";

const VideoPreview = ({ src, thumbnail = defaultThumbnail }) => {
	return (
		<div className="video-preview">
			<video src={src} />

			<div className="thumbnail-wrapper">
				<img className="thumbnail" src={thumbnail} alt="thumbanail" />
				<img src={play} alt="play" className="play-btn" />
			</div>
		</div>
	);
};

export default VideoPreview;
