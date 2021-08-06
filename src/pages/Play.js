import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Row, Col, FlexboxGrid, Avatar, Button, Icon } from "rsuite";
import Video2 from "../components/cards/Video2";
import ShareModal from "../components/modals/ShareModal";
import VideoPlayer from "../components/player/Player";

// dummy data
import { dummyData } from "../data/DummyData";

const Play = () => {
	const [liked, setLiked] = useState(false);
	const [show, setShow] = useState(false);
	const { id } = useParams();

	const videoInfo = dummyData.find((item) => item.id === parseInt(id));

	const { title, description, sources, thumbnail, tags } = videoInfo;

	return (
		<div className="container play-container">
			<ShareModal show={show} setShow={setShow} />
			<Grid fluid>
				<Row className="row">
					<Col xs={24} sm={24} md={24} lg={16} className="col-1">
						<div>
							<VideoPlayer thumbnail={thumbnail} sources={sources} />
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
									<h1 className="title">{title}</h1>
									<div>
										<span className="views">264,587 views</span>
										<span className="up-date">Aug 14,2019</span>
									</div>
									<div className="likes">220 likes</div>
									<Button appearance="primary" style={{ marginTop: 8 }}>
										<span>
											<Icon icon="heart-o" style={{ marginRight: 4 }} />
										</span>{" "}
										Save
									</Button>
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
								<FlexboxGrid.Item onClick={() => setShow(true)}>
									<Icon className="icon" icon="share" />
									Share
								</FlexboxGrid.Item>
							</FlexboxGrid>
							<div className="video-description">{description}</div>
						</div>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} className="col-2">
						{dummyData.map((video) => (
							<Video2
								key={video.id}
								id={video.id}
								title={video.title}
								duration={video.duration}
								thumbnail={video.thumbnail}
								upload_date={video.upload_date}
							/>
						))}
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default Play;
