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
	Schema,
	Radio,
	RadioGroup,
} from "rsuite";
import VideoThumbnail from "react-video-thumbnail";
import ThumbnailModal from "../modals/ThumbnailModal";

const { StringType, ArrayType } = Schema.Types;

const model = Schema.Model({
	title: StringType().isRequired("This field is required"),
	description: StringType().isRequired("This field is required."),
	tags: ArrayType().unrepeatable("Cannot repeat same tag."),
});

const CreateForm = () => {
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

	function dataURItoBlob(dataURI) {
		var mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
		var binary = atob(dataURI.split(",")[1]);
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], { type: mime });
	}

	console.log(formData.thumbnail);

	return (
		<div>
			<Form model={model} fluid className="create-form">
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

				<div style={{ display: "none" }}>
					{formData.file && (
						<>
							{[1, 2, 3, 4, 5].map((item) => {
								const snapTime =
									videoRef.current &&
									Math.floor(Math.random() * videoRef.current.duration);

								console.log(snapTime);

								return (
									<VideoThumbnail
										key={item}
										videoUrl={URL.createObjectURL(formData.file.blobFile)}
										thumbnailHandler={(thumbnail) =>
											setImages([
												...images,
												URL.createObjectURL(dataURItoBlob(thumbnail)),
											])
										}
										snapshotAtTime={snapTime}
									/>
								);
							})}
						</>
					)}
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
							style={{ display: "none" }}
						></video>
					</div>
				)}
				<FlexboxGrid className="thumb-upload">
					<FlexboxGrid.Item className="col-1">
						<div onClick={() => setShow(!show)}>
							<div className="icon-wrapper">
								<Icon icon="image" style={{ color: "#1EBAFF" }} size="2x" />
							</div>
							<h1>Suggested Thumbnails</h1>
						</div>
					</FlexboxGrid.Item>

					<ThumbnailModal show={show} close={() => setShow(false)}>
						<FormGroup controlId="radioList" className="radio-control">
							<RadioGroup
								name="radioList"
								inline
								// appearance="picker"
								className="radio-group"
								defaultValue={formData.thumbnail}
								onChange={(file) => {
									return setFormData({ ...formData, thumbnail: file });
								}}
							>
								{images.length !== 0 ? (
									<>
										{images.map((img) => (
											<Radio key={img} value={img}>
												<img
													className="thumb-img"
													style={{ width: 120, objectFit: "cover" }}
													key={img}
													src={img}
												/>
											</Radio>
										))}
									</>
								) : (
									""
								)}
							</RadioGroup>
						</FormGroup>
					</ThumbnailModal>

					<FlexboxGrid.Item className="col-2">
						<div>
							<div className="icon-wrapper">
								<Icon icon="upload2" style={{ color: "#1EBAFF" }} size="2x" />
							</div>
							<h1>Your Thumbnail</h1>
							<input type="file" accept="images" style={{ display: "none" }} />
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
