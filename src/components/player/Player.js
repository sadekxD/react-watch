import React, { useRef, useEffect, useState } from "react";
import { FlexboxGrid, Icon, Slider } from "rsuite";
import play from "../../media/play.png";
import CustomSlider from "./CustomSlider";
import QualityTooltip from "./QualityTooltip";

const resolutions = ["240p", "360p", "720p", "1080p"];
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

const VideoPlayer = () => {
	const videoRef = useRef(null);
	const playerContainerRef = useRef(null);
	const [resolution, setResolution] = useState("360p");
	const [isPlaying, setIsPlaying] = useState(false);
	const [noThumb, setNoThumb] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [volume, setVolume] = useState(0.6);
	const [fullScreen, setFullScreen] = useState(false);
	const [videoInfo, setVideoInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	useEffect(() => {
		if (isPlaying) setNoThumb(true);
	}, [isPlaying]);

	useEffect(() => {
		if (!isMuted) {
			setVolume(0.1);
		}
	}, [isMuted]);

	useEffect(() => {
		videoRef.current.volume = volume;
	}, []);

	useEffect(() => {
		if (resolution) {
			const src = sources.filter((item) => item.label === resolution);
			videoRef.current.src = src[0].src;
			videoRef.current.currentTime = videoInfo.currentTime;
			if (isPlaying) {
				videoRef.current.play();
			}
		}
	}, [resolution]);

	const togglePlay = () => {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const handleVolume = (e) => {
		const value = e.target.value;
		if (value <= 0) {
			setIsMuted(true);
		} else {
			setIsMuted(false);
		}
		setVolume(value);
		videoRef.current.volume = volume;
	};

	const toggleMute = () => {
		if (isMuted) {
			videoRef.current.muted = false;
			setIsMuted(false);
		} else {
			videoRef.current.muted = true;
			setIsMuted(true);
		}
	};

	const dragHandler = (e) => {
		videoRef.current.currentTime = e.target.value;
		setVideoInfo({ ...videoInfo, currentTime: e.target.value });
	};

	const getTime = (time = 0) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		//Calculate Percentage
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);

		setVideoInfo({
			...videoInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: animation,
		});
	};

	const handleFullScreen = () => {
		const exitFullscreen = () => {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				/* Safari */
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				/* IE11 */
				document.msExitFullscreen();
			}
		};

		if (fullScreen) {
			exitFullscreen();
			setFullScreen(false);
		} else {
			playerContainerRef.current.requestFullscreen();
			setFullScreen(true);
		}
	};

	return (
		<div
			onDoubleClick={handleFullScreen}
			ref={playerContainerRef}
			className={`player-container ${fullScreen ? "" : ""}`}
		>
			<video
				className={fullScreen ? "fullscreen" : ""}
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				onClick={togglePlay}
				ref={videoRef}
				controls={false}
			>
				{sources.map(({ src, type, label }) => (
					<source key={src} src={src} type={type} label={label} />
				))}
				{/* <source
					src="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.480p.webm"
					type="video/webm"
					label="480P"
				/>
				<source
					src="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.360p.webm"
					type="video/webm"
					label="360P"
				/>
				<source
					src="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm/Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm.240p.webm"
					type="video/webm"
					label="240P"
					selected={true}
				/> */}
				Your browser does not support the <code>video</code> element.
			</video>
			<div id="customControls" className="video-controls show">
				<CustomSlider
					onChange={dragHandler}
					min={0}
					max={videoInfo.duration || 0}
					value={videoInfo.currentTime}
					style={{ marginBottom: 12 }}
				/>
				<FlexboxGrid align="middle" justify="space-between">
					<FlexboxGrid.Item className="c-left">
						<div onClick={togglePlay}>
							{isPlaying ? (
								<Icon className="play-icon" icon="pause" />
							) : (
								<Icon className="play-icon" icon="play" />
							)}
						</div>
						<div
							style={{ display: "flex", alignItems: "center", marginRight: 10 }}
						>
							<div className="sound-icon-wrap" onClick={toggleMute}>
								<Icon
									className="sound-icon"
									icon={isMuted ? "volume-off" : "volume-up"}
								/>
								{isMuted && <span className="mute-slash">|</span>}
							</div>

							<CustomSlider
								onChange={handleVolume}
								step={0.05}
								defaultValue={0.6}
								value={volume}
								min={0}
								max={1}
								style={{ width: 80 }}
							/>
						</div>
						<div className="timestamp">
							{getTime(videoInfo.currentTime)} /{" "}
							{videoInfo.duration ? getTime(videoInfo.duration) : "0:00"}
						</div>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item className="c-right">
						<QualityTooltip
							resolution={resolution}
							setResolution={setResolution}
							resolutions={sources.map((item) => item.label)}
						>
							<Icon className="cog-icon" icon="cog" />
						</QualityTooltip>
						<div onClick={handleFullScreen}>
							<Icon
								className="expand-icon"
								icon={fullScreen ? "compress" : "expand"}
							/>
						</div>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</div>
			<div
				onClick={togglePlay}
				className={`thumbnail-wrapper ${noThumb ? "hidden" : ""}`}
			>
				<img
					src="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
					alt="thumbnail"
					className="thumbnail"
				/>
				<img src={play} alt="play" className="play-btn" />
			</div>
		</div>
	);
};

export default VideoPlayer;
