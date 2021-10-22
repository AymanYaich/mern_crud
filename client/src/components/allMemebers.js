import React from 'react';
import { useState, useEffect } from 'react';
import MemberCard from './memberone';
import axios from 'axios';

export default function AllMember() {
	const [ members, setMembers ] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:5000/product/read`).then((result) => {
			setMembers(result.data)
		});
	   console.log('membeeers',members)
	});
	

	return (
		<div className="product-list">
			{members.map((element, i) => {
				return (
					<div>
					<MemberCard element={element} />
					<br />
					</div>
				);
			})}
			
		</div>
	);
}
