import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function MemberCard(props) {

	const [ show, setShow ] = useState(false);
	const [ newName, setNewName ] = useState('');

	const handleClose = () => setShow(false);//close the modal
	const handleShow = () => setShow(true);//open the modal

	const deleteOne = () => {
		let id=props.element._id
		axios.delete(`https://obscure-dawn-57110.herokuapp.com//custumer/deleteOne/?_id=${id}`).then((doc) => {
			console.log('successefully deleted', doc);
		});
		window.location.reload(false);
	};
	const updateName = () => {
		let previousName = props.element.name;
		let changedName = newName;

		axios
			.put(`https://obscure-dawn-57110.herokuapp.com/custumer/updateName/?name=${previousName}`, { name: changedName })
			.then((data) => {
				console.log('successefull update', data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	return (
		<div>
			<Card>
				<Card.Header as="h5">{props.element.name}</Card.Header>
				<Card.Body>
					<Card.Title>{props.element.age}</Card.Title>
					<Card.Text>{props.element.job}</Card.Text>

					<Button variant="primary" onClick={deleteOne}>
						Delete
					</Button>

					<Button variant="primary" onClick={handleShow}>
						Update
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>If you want to update name </Modal.Title>
						</Modal.Header>
						<Modal.Body>last name {props.element.name}</Modal.Body>
						<Modal.Body>updated name : </Modal.Body>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control"
								value={newName}
								onChange={(e) => {
									setNewName(e.target.value);
								}}
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" onClick={updateName}>
									Enter
								</button>
							</div>
						</div>

						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
					<h2>{props.element._id}</h2>
				</Card.Body>
			</Card>
		</div>
	);
}
