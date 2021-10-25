import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
//import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Tooltip } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function MemberCard(props) {
	const { _id, category, name, price, description, image } = props.element;

	const categories = [ 'Electronic', 'Clothes', 'Cosmetic' ];
	const [ newCategory, setNewCategory ] = useState('');
	const [ newName, setNewName ] = useState('');
	const [ newPrice, setNewPrice ] = useState(0);
	const [ newDescription, setNewDescription ] = useState(description);
	const [ updateMessage, setUpdateMessage ] = useState("");
	const [ show, setShow ] = useState(false);

	// handle opening dialog popup
	const showEdit = () => {
		setShow(true);
	};
	// handle closing dialog popup
	const handleClose = () => {
		setShow(false);
	};
	// function to delete the item;
	const deleteOne = (event) => {
		let id = _id;
		axios.delete(`http://localhost:5000/product/deleteOne/?_id=${id}`).then((doc) => {
			console.log('successefully deleted', doc);
		});
		event.preventDefault();
		window.location.reload(false); //to automatically reload the page.
	};
	const updateAll = (event) => {
		
		
		if (newName===""&&newPrice===0&&newCategory===""){
			
		   setUpdateMessage("Nothing to update")
		   alert ("hhhh")
		}else {

		let newData = {
			name: !(newName === '') ? newName : name,
			price: !(newPrice === 0) ? newPrice : price,
			description: newDescription,
			category: !(newCategory === '') ? newCategory : category
		};
		let id = _id;

		axios
			.put(`http://localhost:5000/product/updateAll/?_id=${id}`, newData)
			.then((data) => {
				console.log('successefull update', data);
			})
			.catch((err) => {
				console.log('err', err);
			});
		event.preventDefault();
		window.location.reload(false);
		}
	};

	return (
		<div>
			<div className="materialui-card">
				<Card sx={{ position: 'relative', maxWidth: 345 }}>
					<CardMedia component="img" height="140" image={image} alt="green iguana" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{category}
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
						<Typography variant="body2" color="text.primary">
							{price} TND
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
					</CardContent>
					<CardActions>
						<div className="cardb">
							<Tooltip title="Delete" arrow>
								<div className="item-button">
									<Button size="meduim" type="button" onClick={deleteOne}>
										<i style={{ color: 'red' }} class="fas fa-trash-alt" />
									</Button>
								</div>
							</Tooltip>
							<Tooltip title="Edit" arrow>
								<div className="item-button">
									<Button size="meduim" type="button" onClick={showEdit}>
										<i style={{ color: 'blue' }} class="fas fa-edit" />
									</Button>
								</div>
							</Tooltip>
							<Dialog open={show} onClose={handleClose}>
								<DialogTitle>Here you can change the data of the the product</DialogTitle>

								<Box
									component="form"
									sx={{
										'& .MuiTextField-root': { m: 1, width: '25ch' }
									}}
									noValidate
									autoComplete="off"
								>
									<div>
										<TextField
											id="filled-read-only-input"
											label="Current category"
											defaultValue={category}
											InputProps={{
												readOnly: true
											}}
											variant="filled"
										/>

										<TextField
											id="filled-select-currency"
											select
											label="Modify category"
											variant="filled"
											value={newCategory}
											onChange={(e) => {
												setNewCategory(e.target.value);
											}}
										>
											{categories.map((option) => (
												<MenuItem key={option} value={option}>
													{option}
												</MenuItem>
											))}
										</TextField>

										<TextField
											id="filled-read-only-input"
											label="Current name"
											defaultValue={name}
											InputProps={{
												readOnly: true
											}}
											variant="filled"
										/>
										<TextField
											id="filled-text"
											label="Fill your new name"
											value={newName}
											onChange={(e) => {
												setNewName(e.target.value);
											}}
											variant="filled"
										/>

										<TextField
											id="filled-number"
											label="current price"
											type="number"
											defaultValue={price}
											InputLabelProps={{
												readOnly: true
											}}
											variant="filled"
										/>
										<TextField
											id="filled-number"
											label="	Fill the new price"
											type="number"
											value={newPrice}
											onChange={(e) => {
												setNewPrice(e.target.value);
											}}
											InputLabelProps={{
												shrink: true
											}}
											variant="filled"
										/>
									</div>
								</Box>
								<Box
									component="form"
									sx={{
										'& .MuiTextField-root': { m: 1, width: '52ch' }
									}}
									noValidate
									autoComplete="off"
								>
									<TextField
										fullWidth
										label="Edit description"
										id="fullWidth"
										variant="filled"
										value={newDescription}
										onChange={(e) => {
											setNewDescription(e.target.value);
										}}
									/>
									<TextField id="filled-search" type="file" variant="filled" />
								</Box>
								<DialogActions className="dialogue-buttons">
									<Button onClick={updateAll}>Update</Button>
									<Button onClick={handleClose}>Close</Button>
									<br></br>
									
								</DialogActions>
								<span>{updateMessage}</span>
							</Dialog>
						</div>
					</CardActions>
					<div />
					<div />
				</Card>
			</div>
		</div>
	);
}
