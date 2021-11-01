export const createProject = (project) => {
	return (dispatch, getState) => {
		//make an async call to the Database
		dispatch({ type: 'CREATE_PROJECT', project});
	}
}; 