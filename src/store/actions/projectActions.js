import app from '../../config/fbConfig.js';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//make an async call to firebase
		const db = getFirestore(app).collection("projects")
			db.add({
				...project,
				authorFirstName: 'Jethro',
				authorLastName: 'Read',
				authorID: 12345,
				createdAt: new Date(),
			}).then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			}).catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			})
	}
};