import React, { useEffect } from "react";
import {
	Form,
	FormGroup,
	RadioGroup,
	Radio,
	Uploader,
	Icon,
	ControlLabel,
} from "rsuite";

const ImageUploader = ({ formdata, setFormdata }) => {
	useEffect(() => {
		const fileCheck = formdata.images.filter(
			(image) => image.fileKey === formdata.thumbnail.fileKey
		);

		if (fileCheck.length === 0) {
			setFormdata({ ...formdata, thumbnail: "" });
		}
	}, [formdata.images]);

	return (
		<Form fluid className="uploader">
			<Uploader
				multiple
				listType="picture-text"
				autoUpload={false}
				draggable
				removable={true}
				accept="Image/*"
				fileList={formdata.images}
				onChange={(file) =>
					setFormdata({
						...formdata,
						images: [...file],
					})
				}
			>
				<div className="upload-box">
					<div>
						<Icon icon="plus" size="5x" />
					</div>
					<div className="upload-text">
						<div>Drag & Drop Your Image</div>
						<div>OR</div>
						<div>Upload Your Image</div>
					</div>
				</div>
			</Uploader>

			{formdata.images.length !== 0 ? (
				<FormGroup controlId="radioList" className="radio-control">
					<ControlLabel>
						Select Thumbnail
						<span className="required-dot">*</span>
					</ControlLabel>
					<RadioGroup
						name="radioList"
						inline
						appearance="picker"
						defaultValue="A"
						className="radio-group"
						defaultValue={formdata.thumbnail}
						onChange={(file) => {
							return setFormdata({ ...formdata, thumbnail: file });
						}}
					>
						{formdata.images.map((image) => {
							return (
								<Radio key={image.fileKey} value={image}>
									<img
										className="thumb-img"
										src={URL.createObjectURL(image.blobFile)}
										alt={image.name}
									/>
								</Radio>
							);
						})}
					</RadioGroup>
				</FormGroup>
			) : (
				""
			)}
		</Form>
	);
};

export default ImageUploader;
