import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
 

const rootReducers = combineReducers ({
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducers