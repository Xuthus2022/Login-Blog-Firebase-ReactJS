import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signIn } from '../../store/actions/authActions';

function SignIn(props) {
	const { authError, auth } = props;
		const[state, setState] = useState({
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
		props.signIn(state)
	};
	if (auth.uid) return <Redirect to='/' />

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
					<div className="red-text center">
						{ authError ? <p> Auth Error </p> : null}
					</div>
				</div>
			</form>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)