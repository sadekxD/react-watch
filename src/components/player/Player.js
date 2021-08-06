import React, { useRef, useEffect, useState } from "react";
import { FlexboxGrid, Icon, Slider } from "rsuite";
import play from "../../media/play.png";
import DurationSlider from "./DurationSlider";
import QualityTooltip from "./QualityTooltip";

const defaultThumbnail =
	"https://media.istockphoto.com/vectors/no-thumbnail-image-vector-graphic-vector-id1147544806?k=6&m=1147544806&s=170667a&w=0&h=lYslyr1iPYlaJMp372lvw521YZY-d-z9WBAkQHhLAjc=";

const VideoPlayer = ({ sources = [], thumbnail = defaultThumbnail }) => {
	const videoRef = useRef(null);
	const playerContainerRef = useRef(null);
	const [resolution, setResolution] = useState("360p");
	const [isPlaying, setIsPlaying] = useState(false);
	const [noThumb, setNoThumb] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [volume, setVolume] = useState(100);
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
		videoRef.current.volume = volume / 100;
	}, []);

	useEffect(() => {
		if (resolution && sources.length) {
			const src = sources.filter((item) => item.label === resolution);
			videoRef.current.src = src[0].src;
			videoRef.current.currentTime = videoInfo.currentTime;
			if (isPlaying) {
				videoRef.current.play();
			}
		}
	}, [resolution]);

	useEffect(() => {
		document.addEventListener("fullscreenchange", () => {
			if (!document.fullscreenElement) {
				setFullScreen(false);
			}
		});
	}, []);

	const togglePlay = () => {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const handleVolume = (value) => {
		if (value <= 0) {
			setIsMuted(true);
		}

		if (value > 0) {
			setIsMuted(false);
		}

		setVolume(value);
		videoRef.current.volume = value / 100;
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
			className="player-container"
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
				Your browser does not support the <code>video</code> element.
			</video>
			<div
				id="customControls"
				className={`video-controls show ${!isPlaying ? "paushed" : ""}`}
			>
				<DurationSlider
					videoInfo={videoInfo}
					setVideoInfo={setVideoInfo}
					videoRef={videoRef}
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
						<div className="volume-wrapper">
							<div className="sound-icon-wrap" onClick={toggleMute}>
								<Icon
									className="sound-icon"
									icon={isMuted ? "volume-off" : "volume-up"}
								/>
								{isMuted && <span className="mute-slash">|</span>}
							</div>
							<Slider
								progress
								value={volume}
								onChange={handleVolume}
								step={1}
								min={0}
								max={100}
								className="volume-slider"
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
				className={`gradient show ${!isPlaying ? "paushed" : ""}`}
			></div>
			<div
				onClick={togglePlay}
				className={`thumbnail-wrapper ${noThumb ? "hidden" : ""}`}
			>
				<img src={thumbnail} alt="thumbnail" className="thumbnail" />
				<img src={play} alt="play" className="play-btn" />
			</div>
		</div>
	);
};

export default VideoPlayer;
