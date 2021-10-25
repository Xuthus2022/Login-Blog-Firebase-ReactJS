import React from 'react'

const ProjectDetails = (props) => {
	const id = props.match.params.id
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsum maxime eaque corrupti molestias quaerat totam quas repudiandae exercitationem natus minus odit, aspernatur fugiat dignissimos laboriosam voluptatum, expedita amet. Doloremque.</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Jethro Read</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
