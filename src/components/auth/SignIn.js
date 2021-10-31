import React from 'react'
import { useState } from 'react'

export default function SignIn() {
	const [state, setState] = useState({
			email: '',
			password: '',
		}
	);
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5>Sign in</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={handleChange} />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Login</button>
				</div>
			</form>
		</div>
	)
}

