import React from "react";
import Video from "./cards/Video";

// Masonry CSS
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	// 500: 2,
};

const Videos = ({ header, data = [] }) => {
	return (
		<div className="container video-list-container" style={{ marginTop: 20 }}>
			<h5 className="video-list-header">{header}</h5>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{data.map((video) => (
					<Video
						key={video.id}
						id={video.id}
						title={video.title}
						duration={video.duration}
						thumbnail={video.thumbnail}
						upload_date={video.upload_date}
					/>
				))}
			</Masonry>
		</div>
	);
};

export default Videos;
