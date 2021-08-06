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
	Schema,
	Radio,
	RadioGroup,
} from "rsuite";
import VideoThumbnail from "react-video-thumbnail";
import ThumbnailModal from "../modals/ThumbnailModal";
import VideoPreview from "../preview/VideoPreview";

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

	useEffect(() => {
		if (!formData.file) {
			setImages([]);
			setFormData({ ...formData, thumbnail: "" });
		}
	}, [formData.file]);

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
			<Form
				formValue={formData}
				onChange={(formValue) => {
					setFormData({ ...formData, ...formValue });
				}}
				model={model}
				fluid
				className="create-form"
			>
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
						disabled={formData.file ? true : false}
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
						<VideoPreview
							thumbnail={
								formData.thumbnail
									? URL.createObjectURL(formData.thumbnail)
									: "https://media.istockphoto.com/vectors/no-thumbnail-image-vector-graphic-vector-id1147544806?k=6&m=1147544806&s=170667a&w=0&h=lYslyr1iPYlaJMp372lvw521YZY-d-z9WBAkQHhLAjc="
							}
						/>
					</div>
				)}
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

				{formData.file && (
					<div>
						<div align="middle" justify="space-around" className="thumb-upload">
							<div className="col-1">
								<div className="wrapper">
									<div onClick={() => setShow(!show)}>
										<div className="icon-wrapper">
											<Icon
												icon="image"
												style={{ color: "#1EBAFF" }}
												size="2x"
											/>
										</div>
										<h1>Suggested Thumbnails</h1>
									</div>
								</div>
							</div>

							<div className="col-2">
								<div className="wrapper">
									<Uploader
										removable={true}
										listType="text"
										autoUpload={false}
										disabled={formData.thumbnail ? true : false}
										accept="image/*"
										onChange={(file) => {
											setFormData({
												...formData,
												thumbnail: file[0]?.blobFile,
											});
										}}
									>
										<div>
											<div className="icon-wrapper">
												<Icon
													icon="upload2"
													style={{ color: "#1EBAFF" }}
													size="2x"
												/>
											</div>
											<h1>Your Thumbnail</h1>
											<input
												type="file"
												accept="images"
												style={{ display: "none" }}
											/>
										</div>
									</Uploader>
								</div>
							</div>
						</div>
					</div>
				)}

				<ThumbnailModal show={show} close={() => setShow(false)}>
					<FormGroup controlId="radioList" className="radio-control">
						<RadioGroup
							name="radioList"
							inline
							className="radio-group"
							defaultValue={formData.thumbnail}
							onChange={async (file) => {
								const blob = await fetch(file)
									.then((res) => res.blob())
									.then(
										(blob) =>
											new File([blob], "random thumbnail", {
												type: "image/png",
											})
									);
								return setFormData({ ...formData, thumbnail: blob });
							}}
						>
							{images.length !== 0 ? (
								<>
									{images.map((img) => {
										return (
											<Radio key={img} value={img}>
												<img
													className="thumb-img"
													style={{ width: 120, objectFit: "cover" }}
													src={img}
												/>
											</Radio>
										);
									})}
								</>
							) : (
								""
							)}
						</RadioGroup>
					</FormGroup>
				</ThumbnailModal>

				<FormGroup>
					<ControlLabel>Tags</ControlLabel>
					<FormControl
						name="tags"
						placeholder="Tags"
						accepter={TagPicker}
						creatable
						style={{ width: "100%" }}
					/>
				</FormGroup>
				<FormGroup>
					<Button className="upload-btn" appearance="primary">
						Upload
					</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

export default CreateForm;
