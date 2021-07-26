import React from "react";
import { Modal, Button } from "rsuite";

const ThumbnailModal = ({ show, close, children }) => {
	return (
		<div className="modal-container">
			<Modal
				style={{
					width: "95%",
					maxWidth: 700,
					margin: "0 auto",
					marginTop: 30,
				}}
				show={show}
				onHide={close}
			>
				<Modal.Header>
					<Modal.Title>Modal Title</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button onClick={close} appearance="primary">
						Ok
					</Button>
					<Button onClick={close} appearance="subtle">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ThumbnailModal;
