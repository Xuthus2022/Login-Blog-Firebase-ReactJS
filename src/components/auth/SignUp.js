import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

function SignUp(props) {
	const { auth, authError } = props;
	const [state, setState] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
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
		props.signUp(state)
	};
	if (auth.uid) return <Redirect to='/' />

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5>Sign Up</h5>
				<div className="input-field">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" onChange={handleChange} required />
				</div>
				<div className="input-field">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" onChange={handleChange} required />
				</div>
				{/* <div className=""> 
					<label htmlFor="phoneNumber">Phone Number</label>
					<input type="tel" id="phoneNumber" pattern="[0-9]{11,14}" placeholder="Must be between 11-14 characters" onChange={handleChange} required/>
				</div> */}
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} required />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={handleChange} required />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Sign up</button>
				</div>
				<div className="red-text center">
					{ authError ? <p>{ authError }</p> : null }
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)