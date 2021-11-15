import app from '../../config/fbConfig.js';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const profile = getState().firebase.profile
		const authorID = getState().firebase.auth.uid
		const db = getFirestore(app).collection("projects")
			db.add({
				...project,
				authorFirstName: profile.firstName,
				authorLastName: profile.lastName,
				authorID: authorID,
				createdAt: new Date(),
			}).then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			}).catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			})
	}
};