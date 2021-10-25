import React from 'react'
import { useState } from 'react'

function SignIn() {
	const [state, setState] = useState(
		{
			email: '',
			password: ''
		}
	)
	const handleChange = (e) => {
		setState({
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e)
	}
	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-5">Sign in</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={handleChange} />
				</div>
				<div className="input-field">
					<div className="btn pink lighten-1 z-depth-0">Submit</div>
				</div>
			</form>
		</div>
	)
}


export default SignIn
