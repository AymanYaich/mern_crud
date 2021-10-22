import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//import {  Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default function MemberCard(props) {
	const [ show, setShow ] = useState(false);
	const [ newName, setNewName ] = useState('');

	const handleClose = () => setShow(false); //close the modal
	const handleShow = () => setShow(true); //open the modal

	const deleteOne = () => {
		let id = props.element._id;
		axios.delete(`http://localhost:5000/product/deleteOne/?_id=${id}`).then((doc) => {
			console.log('successefully deleted', doc);
		});
		window.location.reload(false);
	};
	const updateName = () => {
		let previousName = props.element.name;
		let changedName = newName;

		axios
			.put(`https://obscure-dawn-57110.herokuapp.com/product/updateName/?name=${previousName}`, {
				name: changedName
			})
			.then((data) => {
				console.log('successefull update', data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	return (
		<div>
		<div className="materialui-card">
		<Card sx={{ maxWidth: 345 }}>
		<CardMedia
		  component="img"
		  height="140"
		  image={props.element.image}
		  alt="green iguana"
		/>
		<CardContent>
		  <Typography gutterBottom variant="h5" component="div">
			{props.element.name}
		  </Typography>
		  <Typography variant="body2" color="text.secondary">
			{props.element.description}
		  </Typography>
		</CardContent>
		<CardActions>
		  <Button size="small">Share</Button>
		  <Button size="small">Learn More</Button>
		</CardActions>
	  </Card>
		</div>
</div>
	);
}
