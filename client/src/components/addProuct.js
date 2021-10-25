import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function AddProduct() {
	
	const [ name, setName ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ price, setPrice ] = useState();
	const [ description, setDescription ] = useState('');
	const [image,setImage]= useState()
	const categoryList = [ 'Electronic', 'Clothes', 'Cosmetic' ];
    
	
	useEffect(() => {
		if (!categoryList.includes(category)) {
			return setCategory('');
		}
	});

	const sendToDb=(event)=>{
		event.preventDefault();
		const formData = new FormData();
		formData.append("category",category);
		formData.append("name",name);
		formData.append("price",price);
	    formData.append("description",description)
	    formData.append("image",image)
        
	    axios.post(`http://localhost:5000/product/add`,formData).then((data)=>{
			console.log(data)
		})
		console.log("formData",...formData)
	}
	return (
		<div className="product-form">
			<form  encType="multipart/form-data">
				<label for="select" class="form-label">
					Product category
				</label>
				<select
					class="form-select"
					aria-label="Default select example"
					id="select"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					>
					<option selected>Select the category of the product</option>
					return ({categoryList.map((category) => {
						return <option value={category}>{category}</option>;
					})})
				</select>
				<br />
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						{category} product name
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="enter the name of the product"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						{category} product price
					</label>
					<input
						type="number"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="enter the name of the product"
						value={price}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">
						{category} Product description
					</label>
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="2"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text" id="inputGroupFileAddon01">
							Upload product image
						</span>
					</div>
					<div class="custom-file">
						<input
							type="file"
							class="custom-file-input"
							id="inputGroupFile01"
							aria-describedby="inputGroupFileAddon01"
							onChange={(e)=>{setImage(e.target.files[0])}}
						/>
						<label class="custom-file-label" for="inputGroupFile01">
							Choose file
							
						</label>
					</div>
				</div>
				<br></br>
				<button type="submit" class="btn btn-primary" onClick={sendToDb}>Register</button>
			</form>
			<div className="category-image">
			
			</div>
			<br></br>
			<br></br>
		</div>
	);
}
