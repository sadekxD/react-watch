import React from "react";
import {
	Grid,
	Row,
	Col,
	Form,
	FormControl,
	ControlLabel,
	FormGroup,
	SelectPicker,
	Schema,
} from "rsuite";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
	regular_price: NumberType().isInteger("It can only be an integer"),
	sell_price: NumberType()
		.isInteger("It can only be an integer")
		.isRequired("This field is required."),
	availability: StringType().isRequired("This field is required."),
});

const AdditionalDetailsForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			className="additional-detail-form"
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
								Regular Price <span className="optional">(optional)</span>
							</ControlLabel>
							<FormControl name="regular_price" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Sell Price<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl name="sell_price" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Delivery Option <span className="optional">(optional)</span>
							</ControlLabel>
							<FormControl
								name="delivery_option"
								accepter={SelectPicker}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Availability<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="availability"
								accepter={SelectPicker}
								data={[
									{
										label: "yes",
										value: "yes",
										role: "Guest",
									},
									{
										label: "no",
										value: "no",
										role: "Guest",
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
								Location<span className="required-dot">*</span>
							</ControlLabel>
							<FormControl
								name="location"
								placeholder="eg. Hathazari, Chittagong"
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

export default AdditionalDetailsForm;
