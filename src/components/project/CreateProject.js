import React from 'react'
import { useState } from 'react'
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import useId from '@mui/utils/useId';
import { Redirect } from 'react-router';

function CreateProject(props) {
	const [state, setState] = useState({
			title: '',
			content: '',
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
		props.createProject(state)
	};
	const {auth} = props;
	if (!auth.uid) return <Redirect to='signin' />
	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5>Create new project</h5>
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" onChange={handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="content">Content</label>
					<textarea id="content"  className="materialize-textarea" onChange={handleChange}></textarea>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Create</button>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}
const mapStateToProps = (state) => {
	return { 
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
