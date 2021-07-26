import React from "react";
import VideoPlayer from "../components/player/Player";

const src = [
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.720p.webm",
		type: "video/webm",
		label: "720P",
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.480p.webm",
		type: "video/webm",
		label: "480P",
		selected: true,
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.360p.webm",
		type: "video/webm",
		label: "360P",
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.240p.webm",
		type: "video/webm",
		label: "240P",
		selected: true,
	},
];

const Test = () => {
	return (
		<div>
			<VideoPlayer sources={src} />
		</div>
	);
};

export default Test;
