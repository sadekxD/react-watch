import React from "react";
import {
	Modal,
	Button,
	Grid,
	Row,
	Col,
	Form,
	FormGroup,
	FormControl,
	FlexboxGrid,
	Icon,
} from "rsuite";
// React Share
import {
	FacebookShareButton,
	FacebookIcon,
	InstapaperShareButton,
	InstapaperIcon,
	LinkedinShareButton,
	LinkedinIcon,
	PinterestShareButton,
	PinterestIcon,
	RedditShareButton,
	RedditIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from "react-share";

const ShareModal = ({ show, setShow }) => {
	const close = () => {
		setShow(false);
	};

	return (
		<div className="modal-container">
			<Modal
				style={{
					width: "95%",
					maxWidth: 500,
					margin: "0 auto",
					marginTop: 30,
					zIndex: 12312321312321,
				}}
				show={show}
				onHide={close}
			>
				<Modal.Header>
					<Modal.Title>
						<Icon icon="share-alt" /> Share the video on
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Grid fluid>
						<Row>
							<Col xs={24}>
                            <Form fluid>
									<FormGroup>
										<FormControl
											rows={5}
											placeholder="Say something about that..."
											name="textarea"
											componentClass="textarea"
										/>
									</FormGroup>
								</Form>
							</Col>
							<Col xs={24} style={{ marginTop: 20 }}>
								<FlexboxGrid justify="space-between">
									<FlexboxGrid.Item>
										<Button size="sm" appearance="ghost">
											<Icon icon="file-text-o" style={{ marginRight: 4 }} />
											Timeline
										</Button>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<Button size="sm" appearance="ghost">
											<Icon icon="chrome" style={{ marginRight: 4 }} />
											Page
										</Button>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<Button size="sm" appearance="ghost">
											<Icon icon="file-text-o" style={{ marginRight: 4 }} />
											Group
										</Button>
									</FlexboxGrid.Item>
								</FlexboxGrid>
							</Col>
							<Col
								xs={24}
								style={{
									margin: "20px 0",
									textAlign: "center",
									fontWeight: 600,
									fontSize: 20,
								}}
							>
								Or
							</Col>
							<Col xs={24}>
								<FlexboxGrid
									justify="space-between"
									style={{ paddingBottom: 20 }}
								>
									<FlexboxGrid.Item>
										<FacebookShareButton>
											<FacebookIcon size={40} />
										</FacebookShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<InstapaperShareButton>
											<InstapaperIcon size={40} />
										</InstapaperShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<LinkedinShareButton>
											<LinkedinIcon size={40} />
										</LinkedinShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<PinterestShareButton>
											<PinterestIcon size={40} />
										</PinterestShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<WhatsappShareButton>
											<WhatsappIcon size={40} />
										</WhatsappShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<TwitterShareButton>
											<TwitterIcon size={40} />
										</TwitterShareButton>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<RedditShareButton>
											<RedditIcon size={40} />
										</RedditShareButton>
									</FlexboxGrid.Item>
								</FlexboxGrid>
							</Col>
							<Col xs={24}>
								<Button size="sm" appearance="ghost" style={{ float: "right" }}>
									Share
								</Button>
							</Col>
						</Row>
					</Grid>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ShareModal;
