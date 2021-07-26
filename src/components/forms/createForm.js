import React, { useEffect, useRef, useState } from "react";
import {
	Form,
	ControlLabel,
	FormControl,
	TagPicker,
	FormGroup,
	Button,
	Icon,
	Uploader,
	FlexboxGrid,
} from "rsuite";
import VideoThumbnail from "react-video-thumbnail";
import ThumbnailModal from "../modals/ThumbnailModal";

const CreateForm = () => {
	const canvasRef = useRef(null);
	const videoRef = useRef(null);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		thumbnail: "",
		file: "",
		tags: [],
	});
	const [images, setImages] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {}, [formData]);

	const captureThumbnail = async () => {
		const video = await videoRef.current;
		const canvas = await canvasRef.current;
		const context = await canvas.getContext("2d");

		const ratio = video.videoWidth / video.videoHeight;
		const w = video.videoWidth - 100;
		const h = parseInt(w / ratio, 10);
		canvas.width = w;
		canvas.height = h;

		if (images.length < 5) {
			video.currentTime = Math.floor(Math.random() * video.duration);
			context.fillRect(0, 0, w, h);
			context.drawImage(video, 0, 0, w, h);
			canvas.toBlob(function (blob) {
				const url = URL.createObjectURL(blob);
				setImages([...images, url]);
			});
		} else {
			return;
		}
	};

	function dataURItoBlob(dataURI) {
		var mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
		var binary = atob(dataURI.split(",")[1]);
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], { type: mime });
	}

	return (
		<div>
			<Form fluid className="create-form">
				<FormGroup>
					<ControlLabel>
						Video Title <span className="required-dot">*</span>
					</ControlLabel>
					<FormControl name="title" />
				</FormGroup>
				<FormGroup>
					<ControlLabel>
						Video Description <span className="required-dot">*</span>
					</ControlLabel>
					<FormControl rows={5} name="decription" componentClass="textarea" />
				</FormGroup>

				<canvas ref={canvasRef} style={{ display: "none" }} />
				<div>
					{/* {images.map((img, i) => (
						<img key={i} src={img} style={{ width: 200 }} />
					))} */}
				</div>

				<FormGroup>
					<ControlLabel>
						Video<span className="required-dot">*</span>
					</ControlLabel>
					<Uploader
						draggable
						removable={true}
						listType="text"
						autoUpload={false}
						accept="video/mp4,video/x-m4v,video/*"
						onChange={(file) => setFormData({ ...formData, file: file[0] })}
					>
						<div className="upload-box">
							<div>
								<Icon icon="plus" size="4x" />
							</div>
							<div className="upload-text">
								<div>Drag & Drop Your Video</div>
								<div>OR</div>
								<div>Upload Your Video</div>
							</div>
						</div>
					</Uploader>
				</FormGroup>
				{formData.file && (
					<div>
						<video
							ref={videoRef}
							width="320"
							height="240"
							controls
							src={URL.createObjectURL(formData.file.blobFile)}
						></video>
					</div>
				)}
				<FlexboxGrid className="thumb-upload">
					<FlexboxGrid.Item className="col-1">
						<div onClick={() => setShow(!show)}>
							<div className="icon-wrapper">
								<Icon icon="image" style={{ color: "#1EBAFF" }} size="2x" />
							</div>
							<h1>Suggested Images</h1>
						</div>
					</FlexboxGrid.Item>
					<ThumbnailModal show={show} close={() => setShow(false)}>
						{images.length !== 0 ? (
							<div>
								{images.map((img) => (
									<img
										key={img}
										src={img}
										style={{ width: 120, objectFit: "cover" }}
									/>
								))}
							</div>
						) : (
							""
						)}
					</ThumbnailModal>

					<FlexboxGrid.Item className="col-2">
						<div>
							<div className="icon-wrapper">
								<Icon icon="upload2" style={{ color: "#1EBAFF" }} size="2x" />
							</div>
							<h1>Upload Your Thumbnail</h1>
						</div>
					</FlexboxGrid.Item>
				</FlexboxGrid>
				<FormGroup>
					<ControlLabel>Tags</ControlLabel>
					<FormControl
						name="colors"
						placeholder="Tags"
						accepter={TagPicker}
						creatable
						style={{ width: "100%" }}
					/>
				</FormGroup>
				<FormGroup>
					<Button appearance="primary">Upload</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

export default CreateForm;
