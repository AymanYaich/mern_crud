import React from 'react';
import { useState, useEffect } from 'react';
import MemberCard from './memberone';
import axios from 'axios';

export default function AllMember() {
	const [ members, setMembers ] = useState([]);

	useEffect(() => {
		axios.get(`https://obscure-dawn-57110.herokuapp.com/custumer/read`).then((result) => {
			setMembers(result.data)
		}, []);
	   console.log('membeeers',members)
	},[]);

	return (
		<div>
			{members.map((element, i) => {
				return (
					<div>
						<h1>Element number {i + 1}</h1>
						<MemberCard element={element} />
                        <br />
					</div>
				);
			})}
		</div>
	);
}
