import React from "react";
import { Grid, Row, Col, FlexboxGrid, Avatar, Button } from "rsuite";
import Video2 from "../components/cards/Video2";
import VideoPlayer from "../components/player/Player";

const tags = ["training", "IT_training", "Elm_course", "Course", ,];

const Play = () => {
	return (
		<div className="container play-container">
			<Grid>
				<Row className="row">
					<Col xs={24} sm={24} md={24} lg={16} className="col-1">
						<div>
							{/* <video
								className="video-player"
								src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
								style={{ width: "100%" }}
								controls
								controlsList="nodownload"
							/> */}
							<VideoPlayer />
							<div className="tags">
								{tags.map((tag) => (
									<span key={tag} className="tag">
										{`#${tag}`}
									</span>
								))}
							</div>
							<FlexboxGrid align="middle" justify="space-between">
								<FlexboxGrid.Item className="video-info">
									<h1 className="title">Natural Ciew of Mountain</h1>
									<div>
										<span className="views">264,587 views</span>
										<span className="up-date">Aug 14,2019</span>
									</div>
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
