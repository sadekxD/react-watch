import React from "react";
import { Link } from "react-router-dom";

const images = [
	"https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png",
	"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg",
	"https://www.youtubethumbnailsaver.com/Youtube-Thumbnail-Downloader.png",
	"https://www.91-cdn.com/hub/wp-content/uploads/2021/03/YouTube-Thumbnail-maker.jpeg",
];

const Video2 = ({ title, thumbnail, duration, upload_date, author, views }) => {
	return (
		<div className="video-card-2">
			<Link to="/videos/3">
				<div className="video-wrapper">
					<div className="img-wrapper">
						<img
							className="video-img"
							src={images[Math.floor(Math.random() * images.length)]}
							alt="random"
						/>
						<span className="duration">4:33</span>
					</div>
					<div className="video-info">
						<h1 className="video-title">See What Happen When Man In Sea </h1>
						<h4 className="author">Robert Downy Jr.</h4>
						<div>
							<span className="views">5k Views</span>
							<span className="timesince">5 months ago</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Video2;
