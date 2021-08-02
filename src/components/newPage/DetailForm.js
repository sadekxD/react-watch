import React, { useState } from "react";
import {
	Grid,
	Row,
	Col,
	Form,
	FormControl,
	ControlLabel,
	FormGroup,
	SelectPicker,
	TagPicker,
	Schema,
} from "rsuite";

const items = [
	{
		label: "Eugenia",
		value: "Eugenia",
		role: "Master",
	},
	{
		label: "Kariane",
		value: "Kariane",
		role: "Master",
	},
	{
		label: "Louisa",
		value: "Louisa",
		role: "Master",
	},
	{
		label: "Marty",
		value: "Marty",
		role: "Master",
	},
	{
		label: "Kenya",
		value: "Kenya",
		role: "Master",
	},
	{
		label: "Hal",
		value: "Hal",
		role: "Developer",
	},
	{
		label: "Julius",
		value: "Julius",
		role: "Developer",
	},
];

const { StringType, ArrayType } = Schema.Types;

const model = Schema.Model({
	title: StringType().isRequired("This field is required"),
	category: StringType().isRequired("This field is required."),
	colors: ArrayType().unrepeatable("Cannot repeat same variant."),
	sizes: ArrayType().unrepeatable("Cannot repeat same variant."),
	tags: ArrayType().unrepeatable("Cannot repeat same variant."),
	product_condition: StringType().isRequired("This field is required"),
});

const DetailForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			className="detail-form"
			model={model}
			formValue={formdata}
			onChange={(formValue) => {
				setFormdata({ ...formdata, ...formValue });
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Product Title
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl name="title" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Products Category
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="category"
								accepter={SelectPicker}
								data={[
									{
										label: "dummy1",
										value: "dummy1",
										role: "Guest",
									},
									{
										label: "dummy2",
										value: "dummy2",
										role: "Guest",
									},
									{
										label: "dummy3",
										value: "dummy3",
										role: "Guest",
									},
								]}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} style={style}>
						<FormGroup>
							<ControlLabel>
								Product Detail
								<span className="optional">(optional)</span>
							</ControlLabel>
							<FormControl
								name="product_detail"
								rows={5}
								componentClass="textarea"
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Colors</ControlLabel>
							<FormControl
								name="colors"
								placeholder="Colors"
								accepter={TagPicker}
								data={[
									{ label: "Red", value: "red" },
									{ label: "Blue", value: "blue" },
									{ label: "Yellow", value: "yellow" },
								]}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Sizes</ControlLabel>
							<FormControl
								name="sizes"
								placeholder="Sizes"
								creatable
								accepter={TagPicker}
								data={[
									{
										label: "S",
										value: "S",
										role: "Master",
									},
									{
										label: "M",
										value: "M",
										role: "Master",
									},
									{
										label: "L",
										value: "L",
										role: "Master",
									},
								]}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Products Condition
								<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="product_condition"
								accepter={SelectPicker}
								data={[
									{
										label: "new",
										value: "new",
										role: "Master",
									},
									{
										label: "old",
										value: "old",
										role: "Master",
									},
									{
										label: "used",
										value: "used",
										role: "Master",
									},
								]}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Products Tag <span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="tags"
								placeholder="Tag"
								creatable
								accepter={TagPicker}
								data={items}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
				</Row>
			</Grid>
		</Form>
	);
};

const style = {
	marginTop: 16,
};

export default DetailForm;
