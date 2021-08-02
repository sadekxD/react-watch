import React, { useRef, useState, useEffect } from "react";

const DurationSlider = ({ videoInfo, setVideoInfo, videoRef }) => {
	const slider = useRef(null);
	const thumb = useRef(null);
	const [newValue, setNewValue] = useState(0);

	useEffect(() => {
		videoRef.current.currentTime = (videoInfo.duration * newValue) / 100;
		setVideoInfo({
			...videoInfo,
			currentTime: (videoInfo.duration * newValue) / 100,
		});
	}, [newValue]);

	const thumbChange = (value) => {
		setVideoInfo({ ...videoInfo, animationPercentage: Math.floor(value) });
		setNewValue(Math.floor(value));
	};

	const toPercentage = (v, maxValue) => {
		return (v / maxValue) * 100;
	};

	const onMouseDown = (event) => {
		event.preventDefault();
		if (thumb.current.contains(event.target)) {
			let shiftX;

			if (event.type === "touchstart") {
				shiftX =
					event.touches[0].clientX - thumb.current.getBoundingClientRect().left;
			} else {
				shiftX = event.clientX - thumb.current.getBoundingClientRect().left;
			}

			function onMouseMove(e) {
				const rightEdge = slider.current.offsetWidth;
				let newValue;

				if (e.type === "touchmove") {
					newValue =
						e.touches[0].clientX -
						shiftX -
						slider.current.getBoundingClientRect().left;
				} else {
					newValue =
						e.clientX - shiftX - slider.current.getBoundingClientRect().left;
				}

				if (newValue < 0) {
					newValue = 0;
				}
				if (newValue > rightEdge) {
					newValue = rightEdge;
				}

				thumbChange(toPercentage(newValue, rightEdge));
			}

			function onMouseUp() {
				document.removeEventListener("mouseup", onMouseUp);
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("touchend", onMouseUp);
				document.removeEventListener("touchmove", onMouseMove);
			}

			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
			document.addEventListener("touchmove", onMouseMove);
			document.addEventListener("touchend", onMouseUp);
		} else {
			return;
		}
	};

	useEffect(() => {
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("touchstart", onMouseDown);
		return () => {
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("touchstart", onMouseDown);
		};
	});

	return (
		<div className="slider2" id="slider2">
			<div
				className="slider-container"
				onClick={(e) => {
					const rightEdge = slider.current.offsetWidth;
					const shiftX =
						e.clientX - slider.current.getBoundingClientRect().left;
					thumbChange(toPercentage(shiftX, rightEdge));
				}}
				ref={slider}
			>
				<div className="inverse" style={{ width: "100%" }} />
				<div
					className="range-container"
					style={{
						right: `${100 - videoInfo.animationPercentage}%`,
					}}
				/>
				<div
					className="thumb"
					style={{ left: `${videoInfo.animationPercentage}%` }}
					ref={thumb}
				/>
			</div>
		</div>
	);
};

export default DurationSlider;
