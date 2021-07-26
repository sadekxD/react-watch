import React from "react";
import { Icon, Avatar } from "rsuite";
import { Link } from "react-router-dom";

import play from "../../media/play-icon.svg";

const images = [
	"https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png",
	"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg",
	"https://www.youtubethumbnailsaver.com/Youtube-Thumbnail-Downloader.png",
	"https://www.91-cdn.com/hub/wp-content/uploads/2021/03/YouTube-Thumbnail-maker.jpeg",
];

const Video = () => {
	return (
		<div className="video-card">
			<Link to="/videos/3">
				<div className="wrapper">
					<div className="video-img-wrapper">
						<img
							className="video-img"
							src={images[Math.floor(Math.random() * images.length)]}
							alt="random"
						/>
						<span className="icon-wrapper">
							<img src={play} alt="icon" />
						</span>
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
					<p className="video-title">
						Lorem ipsum dolor sit amet, adipiscing elit
					</p>
					<div className="time-stamp">6 months ago</div>
				</div>
			</Link>
		</div>
	);
};

export default Video;
