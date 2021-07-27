import React, { useState } from "react";
import { Grid, Row, Col, FlexboxGrid, Avatar, Button, Icon } from "rsuite";
import Video2 from "../components/cards/Video2";
import VideoPlayer from "../components/player/Player";

const tags = ["training", "IT_training", "Elm_course", "Course"];

const sources = [
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.240p.webm",
		type: "video/webm",
		label: "240p",
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.360p.webm",
		type: "video/webm",
		label: "360p",
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.480p.webm",
		type: "video/webm",
		label: "480p",
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm",
		type: "video/webm",
		label: "720p",
	},
];

const Play = () => {
	const [liked, setLiked] = useState(false);

	return (
		<div className="container play-container">
			<Grid fluid>
				<Row className="row">
					<Col xs={24} sm={24} md={24} lg={16} className="col-1">
						<div>
							<VideoPlayer sources={sources} />
							<div className="tags">
								{tags.map((tag) => (
									<div key={tag} className="tag">
										{`#${tag}`}
									</div>
								))}
							</div>
							<FlexboxGrid
								className="info-container"
								align="middle"
								justify="space-between"
							>
								<FlexboxGrid.Item className="video-info">
									<h1 className="title">Natural Ciew of Mountain</h1>
									<div>
										<span className="views">264,587 views</span>
										<span className="up-date">Aug 14,2019</span>
									</div>
									<div className="likes">220 likes</div>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item className="author-info">
									<Avatar
										src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
										size="lg"
										style={{ marginRight: 10 }}
									>
										RS
									</Avatar>
									<div className="info">
										<h1 className="author-name">CodeX</h1>
										<p className="followers">33k Followers</p>
										<Button className="follow-btn" appearance="ghost" size="xs">
											Follow
										</Button>
									</div>
								</FlexboxGrid.Item>
							</FlexboxGrid>
							<FlexboxGrid
								align="middle"
								justify="space-between"
								className="social"
							>
								<FlexboxGrid.Item onClick={() => setLiked(!liked)}>
									<Icon
										className={`icon ${liked ? "liked" : ""}`}
										icon={liked ? "thumbs-up" : "thumbs-o-up"}
									/>
									Like
								</FlexboxGrid.Item>
								<FlexboxGrid.Item>
									<Icon className="icon" icon="comment-o" />
									Comment
								</FlexboxGrid.Item>
								<FlexboxGrid.Item>
									<Icon className="icon" icon="share" />
									Share
								</FlexboxGrid.Item>
							</FlexboxGrid>
							<div className="video-description">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum."
							</div>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} className="col-2">
						<Video2 />
						<Video2 />
						<Video2 />
						<Video2 />
						<Video2 />
						<Video2 />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default Play;
